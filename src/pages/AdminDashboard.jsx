import React, { useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import UsersSection from "../components/admin/UsersSection";
import OrdersSection from "../components/admin/OrdersSection";
import ProductsSection from "../components/admin/ProductsSection"; // You’ll move the big form here
import { Bar , Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const summary = {
    users: 120,
    products: 42,
    orders: 75,
    revenue: 189000,
  };

  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Sales (₹)",
        data: [20000, 30000, 25000, 40000, 35000, 45000],
        backgroundColor: "#e94d8b",
      },
    ],
  };

  const productDistData = {
    labels: ["Electronics", "Fashion", "Grocery", "Toys", "Others"],
    datasets: [
      {
        label: "Product Categories",
        data: [10, 12, 8, 5, 7],
        backgroundColor: [
          "#e94d8b",
          "#ff6384",
          "#ff9f40",
          "#4bc0c0",
          "#9966ff",
        ],
      },
    ],
  };

  const userGrowthData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "New Users",
      data: [10, 25, 35, 50, 60, 75],
      borderColor: "#e94d8b",
      backgroundColor: "rgba(233, 77, 139, 0.2)",
      tension: 0.3,
      fill: true,
    },
  ],
};


  const renderContent = () => {
    switch (activeTab) {
      case "users":
        return <UsersSection onDelete={(id) => alert("Delete user: " + id)} />;
      case "products":
        return <ProductsSection />;
      case "orders":
        return <OrdersSection />;
      default:
        return (
          <>
            <h2 className="mb-4">Dashboard Overview</h2>

            {/* Summary Cards */}
            <div className="row mb-4">
              {Object.entries(summary).map(([key, value]) => (
                <div className="col-md-3" key={key}>
                  <div className="card text-center shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title text-capitalize">{key}</h5>
                      <p className="card-text fw-bold">
                        {key === "revenue"
                          ? `₹${value.toLocaleString()}`
                          : value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts */}
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card p-3 shadow-sm">
                  <h6 className="text-center mb-3">Sales Trends</h6>
                  <Bar data={salesData} />
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card p-3 shadow-sm">
                  <h6 className="text-center mb-3">User Growth (Mock Data)</h6>
                  <Line data={userGrowthData} />
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="d-flex">
      <Sidebar setActiveTab={setActiveTab} />
      <div
        className="flex-grow-1 p-4"
        style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
