import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp } from "../api/auth";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");

  const handleOtpVerification = async (e) => {
    e.preventDefault();

    try {
      await verifyOtp({ email, otp }); // ✅ now calling /auth/otp/verify
      setMessage("✅ OTP verified successfully!");

      // Navigate to password reset form
      setTimeout(() => {
        navigate("/reset-password", { state: { email } });
      }, 1500);
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Invalid OTP");
    }
  };

  return (
    <div className="mt-5 signup-from-card" style={styles.card}>
      <h3 className="mb-3 pink-tit">Verify OTP</h3>
      <p>Enter the OTP sent to your email</p>

      <form onSubmit={handleOtpVerification}>
        <div className="form-group mb-3">
          <label>OTP</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn w-100" style={styles.button}>
          Verify OTP
        </button>
      </form>

      {message && (
        <div className="alert alert-info mt-3 text-center">{message}</div>
      )}
    </div>
  );
};

const styles = {
  card: {
    maxWidth: "400px",
    margin: "auto",
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

export default VerifyOtp;
