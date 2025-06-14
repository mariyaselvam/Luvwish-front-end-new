// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Show loading indicator while auth state is being determined
  if (loading) return <p>Loading...</p>;

  // Allow access to homepage even if not logged in
  if (location.pathname === "/") return children;

  // If user not logged in, redirect to signup
  if (!user) return <Navigate to="/signup" replace />;

  return children;
};

export default ProtectedRoute;
