import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signupUser, verifyOtp } from "../api/auth";
import { useAuth } from "../context/AuthContext"; // 🔥 Add this

const Signup = () => {
  const [step, setStep] = useState("signup");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const { setUser } = useAuth(); // 🔥 Use this


  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await signupUser({ name, email, password });
      setMessage("Signup successful! Redirecting to login...");
      navigate("/login"); // ✅ Redirect here
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed");
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();

    try {
      await verifyOtp({ email, otp });
      setMessage("OTP verified successfully! You can now log in.");
    } catch (error) {
      setMessage(error.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="mt-5 signup-from-card" style={styles.card}>
      <h3 className="mb-3 pink-tit">
        {step === "signup" ? "Create Account" : "Verify OTP"}
      </h3>
      <p>
        {step === "signup"
          ? "Sign up to get started with LuvWish"
          : "Enter the OTP sent to your email"}
      </p>

      {step === "signup" ? (
        <form onSubmit={handleSignup}>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Email ID</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={styles.signupButton}
          >
            Sign Up
          </button>
        </form>
      ) : (
        <form onSubmit={handleOtpVerification}>
          <div className="form-group mb-3">
            <label>Enter OTP</label>
            <input
              type="text"
              className="form-control"
              placeholder="6-digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-100"
            style={styles.signupButton}
          >
            Verify OTP
          </button>
        </form>
      )}

      {message && (
        <div className="alert alert-info mt-3 text-center" role="alert">
          {message}
        </div>
      )}

      {step === "signup" && (
        <div className="text-center mt-4" style={{ fontSize: "14px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#e94d8b", fontWeight: "bold" }}>
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

const styles = {
  signupButton: {
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

export default Signup;
