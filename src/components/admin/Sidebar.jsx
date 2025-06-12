// components/admin/Sidebar.jsx
import React from "react";

const Sidebar = ({ setActiveTab }) => (
  <div
    className="p-3 text-white"
    style={{ width: "250px", minHeight: "100vh", backgroundColor: "#D91374" }}
  >
    <h4>Admin Panel</h4>
    <ul className="list-unstyled">
      {["dashboard", "users", "products", "orders"].map((tab) => (
        <li key={tab}>
          <button
            className="btn btn-link"
            style={{ color: "#F9CEE4", textDecoration: "none" }}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
