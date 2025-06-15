import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { fetchProducts } from "../../api/productApi";
import { addToCart } from "../../api/cartApi";
import RattingStart from "../../assets/images/product-listing/ratting-star.svg"

const ProductListingComponent = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // added
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetchProducts();
        console.log("Fetched products:", response); // ✅ Keep for safety
        const data = Array.isArray(response.data) ? response.data : [];
        setProducts(data); // ✅ Guaranteed to be an array
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // ✅ fallback to empty array
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      await addToCart(productId);
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  // 🔁 Loading spinner
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "300px" }}
      >
        <div
          style={{
            border: "8px solid #f3f3f3",
            borderTop: "8px solid #e94d8b",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            animation: "spin 1s linear infinite",
          }}
        />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product._id}>
          <div className="card h-100 product-listing-card">
            <div
              className="Product-Listing-Component-card-img"
              style={{ position: "relative" }}
            >
              <Link to={`/product/${product._id}`}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <button
                className="btn btn-pink add-to-cart-btn"
                disabled={!product.inStock}
                onClick={() => handleAddToCart(product._id)}
                style={{
                  backgroundColor: "#E94D8B",
                  borderColor: "#ff69b4",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "14px",
                  borderRadius:"15px"
                }}
              >
                <FaPlus />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>

            <div className="card-body">
                <div className="product-ratting-wrap">
                    4.9 <img src={RattingStart} alt="" />
                </div>

              <Link
                to={`/product/${product._id}`}
                className="text-decoration-none text-dark"
              >
                <h5 className="card-title" style={{ cursor: "pointer" }}>
                  {product.name}
                </h5>
              </Link>
              <p
                className="card-text"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductListingComponent;
