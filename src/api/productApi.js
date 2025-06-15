import axiosClient from "./axiosClient";

export const fetchProducts = () => {
  return axiosClient.get("/products");
};

export const fetchProductById = (productId) => {
  return axiosClient.get(`/products/${productId}`);
};

export const deleteProduct = (id) => {
  return axiosClient.delete(`/products/${id}`);
};

export const updateProduct = async (productId, formData) => {
  console.log("FormData being submitted to updateProduct:");

  // Debug: print FormData contents
  for (let pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }

  return axiosClient.patch(`/products/${productId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};



export const createProduct = async (formData) => {
  console.log("FormData being submitted to createProduct:");

  for (let pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }

  return axiosClient.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

