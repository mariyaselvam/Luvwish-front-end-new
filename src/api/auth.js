import axiosClient from "./axiosClient";

// Signup
export const signupUser = (userData) => {
  return axiosClient.post("/auth/signup", userData);
};

// Signin
export const signinUser = (userData) => {
  return axiosClient.post("/auth/signin", userData, { withCredentials: true });
};

// Logout
export const logoutUser = () => {
  return axiosClient.post("/auth/logout", {}, { withCredentials: true });
};

// Get logged-in user info
export const getMe = () => {
  return axiosClient.get("/auth/me", { withCredentials: true });
};

// ✅ New OTP API
export const sendOtp = (emailData) => {
  return axiosClient.post("/auth/otp", emailData);
};

// ✅ Use this instead of the old one
export const verifyOtp = (otpData) => {
  return axiosClient.post("/auth/otp/verify", otpData);
};

// ✅ NEW: Reset Password
export const resetPassword = (resetData) => {
  return axiosClient.post("/auth/reset-password", resetData);
};
