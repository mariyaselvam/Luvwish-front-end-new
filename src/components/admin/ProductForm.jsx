import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
    kitItems: [{ name: "", quantity: "" }],
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductForm((prev) => ({ ...prev, image: file }));
  };

  const handleKitItemChange = (index, field, value) => {
    const updatedKitItems = [...productForm.kitItems];
    updatedKitItems[index][field] = value;
    setProductForm((prev) => ({ ...prev, kitItems: updatedKitItems }));
  };

  const addKitItem = () => {
    setProductForm((prev) => ({
      ...prev,
      kitItems: [...prev.kitItems, { name: "", quantity: "" }],
    }));
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", productForm.name);
    formData.append("description", productForm.description);
    formData.append("price", productForm.price);

    if (productForm.image) {
      formData.append("image", productForm.image);
    }

    // Clean kitItems array, convert quantities to number
    const validKitItems = productForm.kitItems
      .filter((item) => item.name && item.quantity)
      .map((item) => ({
        name: item.name.trim(),
        quantity: Number(item.quantity),
      }));

    formData.append("kitItems", JSON.stringify(validKitItems));

    // Use your API call here to send formData
    // Example:
    // await updateProduct(productForm._id, formData);

    console.log("Submitting FormData...");
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Add Product</button>

      {showModal && (
        <div>
          <ProductForm
            productForm={productForm}
            handleFormChange={handleFormChange}
            handleKitItemChange={handleKitItemChange}
            addKitItem={addKitItem}
            handleImageChange={handleImageChange}
            handleProductSubmit={handleProductSubmit}
          />
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ProductsSection;
