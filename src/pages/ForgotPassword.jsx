import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOtp } from "../api/auth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅ Required for navigation

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await sendOtp({ email });
      console.log("OTP Response:", response.data);
      setMessage("✅ OTP sent successfully to your email!");

      // ✅ Navigate to verify-otp page with email passed in state
      setTimeout(() => {
        navigate("/verify-otp", { state: { email } });
      }, 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Failed to send OTP.");
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h3 className="mb-3 pink-tit">Reset Password</h3>
        <p>Please enter your email to receive an OTP</p>

        <form onSubmit={handleSendOtp}>
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

          <button
            type="submit"
            className="btn w-100"
            style={styles.button}
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Reset Password"}
          </button>
        </form>

        {message && (
          <div className="alert alert-info mt-3 text-center">{message}</div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    maxWidth: "400px",
    width: "100%",
    padding: "30px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#e94d8b",
    borderColor: "#e94d8b",
    color: "#fff",
  },
};

export default ForgotPassword;
