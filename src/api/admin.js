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

export const downloadInvoice = async (orderId) => {
  try {
    const response = await axiosClient.get(`/orders/${orderId}/invoice`, {
      responseType: "blob", // ensures the server sends back a binary file
    });

    // Create a blob from the response
    const blob = new Blob([response.data], { type: "application/pdf" });

    // Create a temporary URL
    const url = window.URL.createObjectURL(blob);

    // Create a link element and simulate a click
    const link = document.createElement("a");
    link.href = url;
    link.download = `Invoice_${orderId}.pdf`;
    document.body.appendChild(link);
    link.click();

    // Cleanup
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading invoice:", error);
    alert("Failed to download invoice");
  }
};