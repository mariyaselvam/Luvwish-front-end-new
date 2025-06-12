import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { resetPassword } from "../api/auth";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setMessage("❌ Passwords do not match.");
    }

    try {
      const response = await resetPassword({ email, newPassword: password });
      console.log("Password Reset Response:", response.data);
      setStep(2);
    } catch (error) {
      setMessage(error.response?.data?.message || "❌ Failed to reset password.");
    }
  };

  const handleContinue = () => {
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      {step === 1 && (
        <form onSubmit={handlePasswordSubmit} style={styles.card}>
          <h3 className="pink-tit">Set a New Password</h3>
          <p>Create a new password for <strong>{email}</strong>.</p>
          <input
            type="password"
            placeholder="New Password"
            className="form-control mb-3"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control mb-3"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="btn w-100" style={styles.button}>
            Update Password
          </button>
          {message && (
            <div className="alert alert-info mt-3 text-center">{message}</div>
          )}
        </form>
      )}

      {step === 2 && (
        <div style={styles.card} className="text-center">
          <div style={styles.tick}>&#10003;</div>
          <h4>Password Updated Successfully</h4>
          <p>You can now log in with your new password.</p>
          <button onClick={handleContinue} className="btn w-100" style={styles.button}>
            Continue to Login
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "auto",
    marginTop: "60px",
    padding: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  button: {
    backgroundColor: "#e94d8b",
    borderColor: "#e94d8b",
    color: "#fff",
    fontWeight: "bold",
  },
  tick: {
    fontSize: "48px",
    color: "#28a745",
    marginBottom: "15px",
  },
};

export default ResetPassword;
