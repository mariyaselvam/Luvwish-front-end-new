import React, { useEffect, useState } from "react";
import { fetchAdminUsers, deleteAdminUser } from "../../api/admin"; // adjust if needed

const UsersSection = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await fetchAdminUsers();
      setUsers(Array.isArray(res.data.users) ? res.data.users : []);
    } catch (err) {
      console.error("Failed to fetch users", err);
      alert("Error loading users.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (!confirm) return;

    try {
      await deleteAdminUser(id);
      setUsers((prev) => prev.filter((u) => u._id !== id));
      alert("User deleted successfully!");
    } catch (err) {
      console.error("Failed to delete user", err);
      alert("Failed to delete user.");
    }
  };

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Users</h2>

      {/* Search Input */}
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="form-control"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Users Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead style={{ backgroundColor: "#D91374", color: "white" }}>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Coins</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              [...Array(5)].map((_, i) => (
                <tr key={i}>
                  <td colSpan="6">
                    <div className="placeholder-glow">
                      <span className="placeholder col-12"></span>
                    </div>
                  </td>
                </tr>
              ))
            ) : filteredUsers.length > 0 ? (
              filteredUsers.map((u, index) => (
                <tr key={u._id}>
                  <td>{index + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{new Date(u.createdAt).toLocaleDateString()}</td>
                  <td>{u.coins}</td>
                  <td>
                    <button
                      className="btn btn-sm"
                      style={{
                        backgroundColor: "#D91374",
                        borderColor: "#D91374",
                        color: "white",
                      }}
                      onClick={() => handleDeleteUser(u._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersSection;
