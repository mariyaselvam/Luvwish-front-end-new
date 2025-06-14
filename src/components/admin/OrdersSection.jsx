import React, { useEffect, useState } from "react";
import { fetchAdminOrders  , downloadInvoice} from "../../api/admin"; // adjust path if different
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AdminOrdersSection = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "desc",
  });

  const rowsPerPage = 5;

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await fetchAdminOrders();
        const { orders } = res.data;
        setOrders(orders);
      } catch (err) {
        setError("Error fetching orders.");
      } finally {
        setLoading(false);
      }
    };

    getOrders();
  }, []);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc")
      direction = "desc";
    setSortConfig({ key, direction });
  };


  const filteredOrders = orders
    .filter((order) => {
      if (filterStatus === "all") return true;
      return order.status === filterStatus;
    })
    .filter((order) => {
      const fullName =
        `${order.billingAddress?.firstName} ${order.billingAddress?.lastName}`.toLowerCase();
      return (
        fullName.includes(searchTerm.toLowerCase()) ||
        order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
    .filter((order) => {
      const orderDate = new Date(order.createdAt);
      if (startDate && orderDate < new Date(startDate)) return false;
      if (endDate && orderDate > new Date(endDate)) return false;
      return true;
    });

  const sortedOrders = filteredOrders.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedOrders.length / rowsPerPage);
  const displayedOrders = sortedOrders.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  if (loading)
    return (
      <div className="p-4">
        <div className="skeleton-loader">Loading orders...</div>
      </div>
    );
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="p-3">
      <h2 className="mb-4">All Orders</h2>

      <div className="mb-3 d-flex flex-wrap gap-3">
        <input
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control w-auto"
        />
        <select
          onChange={(e) => setFilterStatus(e.target.value)}
          value={filterStatus}
          className="form-select w-auto"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="form-control w-auto"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="form-control w-auto"
        />
      </div>

      <div className="table-responsive bg-white p-3 border rounded">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th
                onClick={() => requestSort("orderNumber")}
                style={{ cursor: "pointer" }}
              >
                Order Number
              </th>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Items</th>
              <th
                onClick={() => requestSort("totalAmount")}
                style={{ cursor: "pointer" }}
              >
                Total (₹)
              </th>
              <th
                onClick={() => requestSort("createdAt")}
                style={{ cursor: "pointer" }}
              >
                Date
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedOrders.length > 0 ? (
              displayedOrders.map((order) => (
                <tr key={order._id}>
                  <td>{order.orderNumber}</td>
                  <td>
                    {order.billingAddress?.firstName}{" "}
                    {order.billingAddress?.lastName}
                  </td>
                  <td>{order.email}</td>
                  <td>{order.phoneNumber}</td>
                  <td>
                    <ul className="mb-0 p-0" style={{ listStyleType: "none" }}>
                      {order.items?.map((item) => (
                        <li key={item._id}>
                          {item.product?.name} × {item.quantity} — ₹{item.price}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>{order.totalAmount.toFixed(2)}</td>
                  <td>{order.createdAt.split("T")[0]}</td>
                  <td>
                    <button
                    style={{
                      fontSize:"13px"
                    }}
                      className="btn btn-sm btn-outline-success"
                      onClick={() => downloadInvoice(order._id)}
                    >
                      📄 Download Invoice
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-outline-primary"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="btn btn-outline-primary"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminOrdersSection;
