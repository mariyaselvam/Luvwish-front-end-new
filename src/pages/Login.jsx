import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { signinUser } from "../api/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await signinUser({ email, password });
      setMessage("Login successful!");
      console.log(response.data);
      navigate("/");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="mt-5 signin-from-card" style={styles.card}>
      <h3 className="mb-3 pink-tit">Welcome back!</h3>
      <p>Enter your credentials to access your account</p>

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="d-flex justify-content-between align-items-center mb-1">
          <label htmlFor="password" className="form-label mb-0">
            Password
          </label>
          <Link
            to="/forgot-password"
            className="small"
            style={{ color: "#e94d8b" }}
          >
            Forgot Password?
          </Link>
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn w-100" style={styles.loginButton}>
          Login
        </button>

        {message && (
          <div className="alert alert-info mt-3 text-center" role="alert">
            {message}
          </div>
        )}
      </form>

      <div className="text-center mt-4" style={{ fontSize: "14px" }}>
        Don't have an account?{" "}
        <Link to="/signup" style={{ color: "#e94d8b", fontWeight: "bold" }}>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

// Custom styles
const styles = {
  loginButton: {
    backgroundColor: "#e94d8b",
    borderColor: "#e94d8b",
    color: "white",
  },
  card: {
    maxWidth: "400px",
    margin: "auto",
    padding: "30px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
};

export default Login;
