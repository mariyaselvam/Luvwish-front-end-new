// src/components/PublicRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // adjust path if needed

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (user) {
    return <Navigate to="/dashboard" />; // or your home page
  }

  return children;
};

export default PublicRoute;
