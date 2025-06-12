import axiosClient from "./axiosClient";


export const fetchAdminOrders = () => {
  return axiosClient.get("/orders/admin/orders");
};

// ✅ New: Get all users
export const fetchAdminUsers = () => {
  return axiosClient.get("/auth/users");
};

// ✅ New: Delete a user by ID
export const deleteAdminUser = (userId) => {
  return axiosClient.delete(`/auth/users/${userId}`);
};

// ✅ Download invoice PDF for a given order

export const downloadInvoice = (orderId) => {
  return axiosClient.get(`/orders/${orderId}/invoice`);
};