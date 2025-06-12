import axiosClient from "./axiosClient";

export const addToCart = (productId, quantity = 1) => {
  return axiosClient.post("/cart", { productId, quantity });
};

export const fetchCartItems = () => {
  return axiosClient.get("/cart");
};

export const updateCartItemQuantity = (productId, quantity) => {
  return axiosClient.patch("/cart/quantity", { productId, quantity });
};

export const deleteCartItem = (productId) => {
  return axiosClient.delete(`/cart/${productId}`);
};
