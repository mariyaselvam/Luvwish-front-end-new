import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import { fetchProductById } from "../api/productApi";
import { addToCart } from "../api/cartApi"; // Import your cart API
import { FaHeart } from "react-icons/fa";

const ProductDetailComponent = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetchProductById(productId);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = async () => {
    try {
      setAddingToCart(true);
      await addToCart(productId, quantity);
      navigate("/cart");
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("Failed to add to cart");
    } finally {
      setAddingToCart(false);
    }
  };

  const handleQuickAddToCart = async () => {
    try {
      await addToCart(productId, quantity);
      alert("Added to cart!");
    } catch (error) {
      console.error("Quick add to cart failed:", error);
      alert("Failed to add to cart");
    }
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  if (!product) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
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
      <Nav />
      <div className="container mt-5 sec-p">
        <div className="row">
          <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid project-detail-page" />
          </div>
          <div className="col-md-6">
            <h2 className="pink-tit mb-4 px48">{product.name}</h2>
            <div className="d-flex gap-4 ">
              <h4 className="pink-tit mb-2 px30 text-muted">
                <del>Rs : {product.price + 100}</del>
              </h4>
              <h4 className="pink-tit mb-4 px30">
                Rs : {product.price}
              </h4>
            </div>

            <p>{product.description}</p>
            {Array.isArray(product.kitItems) && product.kitItems.length > 0 && (
              <div className="mb-4">
                {/* <h5 className="mb-3">What's inside this kit:</h5> */}
                <ul className="list-unstyled">
                  {product.kitItems.map((item, index) => (
                    <li
                      key={index}
                      className="d-flex align-items-center mb-2"
                      style={{
                        color: "#e94d8b",
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          backgroundColor: "#e94d8b",
                          marginRight: "10px",
                          flexShrink: 0,
                        }}
                      />
                      <span>
                        {item.name}{" "}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="d-flex align-items-center mb-3 gap-2">
              <div>
                <button
                  className="btn btn-outline-secondary me-2"
                  onClick={() => handleQuantityChange(-1)}
                >
                  −
                </button>
                <span className="fw-bold">{quantity}</span>
                <button
                  className="btn btn-outline-secondary ms-2"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>

              <button
                style={{ backgroundColor: "#d91374", color: "white" }}
                className="btn"
                onClick={handleAddToCart}
                disabled={!product.inStock || addingToCart}
              >
                {addingToCart
                  ? "Adding..."
                  : product.inStock
                  ? "Buy Now"
                  : "Out of Stock"}
              </button>

              {/* Heart / Quick Add button (Add to cart only) */}
              <button
                className="btn btn-outline-danger"
                onClick={handleQuickAddToCart}
                title="Add to Cart"
                style={{ fontSize: "1rem" }}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailComponent;
