// src/pages/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // adjust path if needed

const Logout = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(null); // clear user state
    localStorage.removeItem("token"); // optional: clear stored token
    navigate("/login"); // redirect to login page
  }, [setUser, navigate]);

  return <p>Logging out...</p>;
};

export default Logout;
