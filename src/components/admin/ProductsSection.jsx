import React, { useState, useEffect } from "react";
import {
  createProduct,
  fetchProducts,
  deleteProduct,
  updateProduct,
} from "../../api/productApi";

const ProductsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);

  const [productForm, setProductForm] = useState({
    _id: null,
    name: "",
    description: "",
    price: "",
    image: null,
    kitItems: [{ name: "", quantity: "" }],
  });

  // Load products on mount
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const res = await fetchProducts();
      setProducts(res.data);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    }
  };

  // Form input changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
  };

  // Kit items field changes
  const handleKitItemChange = (index, field, value) => {
    const updatedKitItems = [...productForm.kitItems];
    updatedKitItems[index][field] = value;
    setProductForm((prev) => ({ ...prev, kitItems: updatedKitItems }));
  };

  // Add new kit item
  const addKitItem = () => {
    setProductForm((prev) => ({
      ...prev,
      kitItems: [...prev.kitItems, { name: "", quantity: "" }],
    }));
  };

  // Image file change
  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setProductForm((prev) => ({ ...prev, image: e.target.files[0] }));
    }
  };

  // Submit form (create or update product)
  const handleProductSubmit = async (e) => {
    e.preventDefault();

    const cleanedKitItems = productForm.kitItems
      .filter((item) => item.name.trim() && item.quantity)
      .map((item) => ({
        name: item.name.trim(),
        quantity: Number(item.quantity),
      }));

    const formData = new FormData();
    formData.append("name", productForm.name);
    formData.append("description", productForm.description);
    formData.append("price", productForm.price);

    cleanedKitItems.forEach((item, idx) => {
      formData.append(`kitItems[${idx}][name]`, item.name);
      formData.append(`kitItems[${idx}][quantity]`, item.quantity);
    });

    if (productForm.image) {
      formData.append("image", productForm.image);
    }

    try {
      if (productForm._id) {
        await updateProduct(productForm._id, formData);
        alert("Product updated!");
      } else {
        await createProduct(formData);
        alert("Product added!");
      }

      // reset and reload
      setShowModal(false);
      setProductForm({
        _id: null,
        name: "",
        description: "",
        price: "",
        image: null,
        kitItems: [{ name: "", quantity: "" }],
      });
      loadProducts();
    } catch (err) {
      console.error("Error submitting product:", err);
      alert("Failed to submit product");
    }
  };

  // Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    try {
      await deleteProduct(id);
      loadProducts();
    } catch (err) {
      console.error(err);
      alert("Failed to delete product.");
    }
  };

  // Open modal with product data for edit
  const openEditModal = (product) => {
    setProductForm({
      _id: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: null, // Reset image, user can upload new
      kitItems:
        product.kitItems && product.kitItems.length > 0
          ? product.kitItems
          : [{ name: "", quantity: "" }],
    });
    setShowModal(true);
  };

  return (
    <div>
      <h2>Products</h2>

      <button
        className="btn btn-primary mb-3"
        style={{ backgroundColor: "#D91374", borderColor: "#D91374" }}
        onClick={() => {
          setProductForm({
            _id: null,
            name: "",
            description: "",
            price: "",
            image: null,
            kitItems: [{ name: "", quantity: "" }],
          });
          setShowModal(true);
        }}
      >
        + Add Product
      </button>

      <table className="table table-bordered table-striped">
        <thead style={{ backgroundColor: "#D91374", color: "white" }}>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price (₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, i) => (
              <tr key={product._id}>
                <td>{i + 1}</td>
                <td>{product.name}</td>
                <td>
                  {product.description.split(" ").length > 7
                    ? product.description.split(" ").slice(0, 7).join(" ") +
                      "..."
                    : product.description}
                </td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-sm me-2"
                    style={{
                      backgroundColor: "#F9CEE4",
                      borderColor: "#F9CEE4",
                      color: "#D91374",
                    }}
                    onClick={() => openEditModal(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm"
                    style={{
                      backgroundColor: "#D91374",
                      borderColor: "#D91374",
                      color: "white",
                    }}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {productForm._id ? "Edit Product" : "Add Product"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                />
              </div>
              <div className="modal-body">
                <form
                  onSubmit={handleProductSubmit}
                  className="p-3 border rounded bg-white"
                >
                  <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={productForm.name}
                      onChange={handleFormChange}
                      placeholder="Enter product name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      rows={3}
                      value={productForm.description}
                      onChange={handleFormChange}
                      placeholder="Enter product description"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Price (₹)</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      value={productForm.price}
                      onChange={handleFormChange}
                      placeholder="Enter price"
                      required
                      min="0"
                      step="0.01"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Kit Items</label>
                    {productForm.kitItems.map((item, idx) => (
                      <div className="row mb-2" key={idx}>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Kit Item Name"
                            value={item.name}
                            onChange={(e) =>
                              handleKitItemChange(idx, "name", e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Quantity"
                            value={item.quantity}
                            onChange={(e) =>
                              handleKitItemChange(
                                idx,
                                "quantity",
                                e.target.value
                              )
                            }
                            min="1"
                            required
                          />
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-primary"
                      onClick={addKitItem}
                    >
                      + Add Kit Item
                    </button>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Product Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      className="form-control"
                      onChange={handleImageChange}
                      // required only for new product
                      required={!productForm._id}
                    />
                  </div>

                  <div className="text-end">
                    <button type="submit" className="btn btn-success">
                      {productForm._id ? "Update Product" : "Add Product"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsSection;
