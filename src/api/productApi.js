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



export const createProduct = async (productData) => {
  const formData = new FormData();

  formData.append("name", productData.name);
  formData.append("description", productData.description);
  formData.append("price", productData.price);
  formData.append("kitItems", JSON.stringify(productData.kitItems));

  if (productData.image) {
    formData.append("image", productData.image);
  }

  return axiosClient.post("/products", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
