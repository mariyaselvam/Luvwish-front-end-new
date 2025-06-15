import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import {
  fetchCartItems,
  updateCartItemQuantity,
  deleteCartItem,
} from "../api/cartApi";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const SHIPPING_COST = 103;

  const fetchCart = async () => {
    try {
      const response = await fetchCartItems();
      if (Array.isArray(response.data.items)) {
        setCartItems(response.data.items);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Failed to fetch cart:", error);
    } finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = async (productId, delta) => {
    const updatedCart = cartItems.map((item) => {
      if (item.productId === productId) {
        const newQuantity = item.quantity + delta;
        if (newQuantity < 1) return item;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedCart);

    const updatedItem = updatedCart.find(
      (item) => item.productId === productId
    );
    if (updatedItem) {
      try {
        await updateCartItemQuantity(productId, updatedItem.quantity);
      } catch (error) {
        console.error("Failed to update quantity:", error);
      }
    }
  };

  const handleDeleteItem = async (productId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this item from the cart?"
    );
    if (!confirmDelete) return;

    try {
      await deleteCartItem(productId);
      setCartItems(cartItems.filter((item) => item.productId !== productId));
    } catch (error) {
      console.error("Failed to delete item:", error);
      alert("Failed to remove the item from cart.");
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const subtotal = calculateSubtotal();
  const total = subtotal + SHIPPING_COST;

  if (loading) {
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

      <div className="container mt-4 sec-p">
        <h2 className="mb-4">Your Cart</h2>
        <div className="row">
          <div className="col-lg-9">
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <div className="row fw-bold border-bottom py-2 d-none d-md-flex">
                  <div className="col-md-2">Product</div>
                  <div className="col-md-2">Name</div>
                  <div className="col-md-2 text-center">Price</div>
                  <div className="col-md-2 text-center">Quantity</div>
                  <div className="col-md-2 text-center">Total</div>
                  <div className="col-md-2 text-end">Remove</div>
                </div>

                {cartItems.map((item) => (
                  <div
                    className="row align-items-center border-bottom py-3 "
                    key={item.productId}
                  >
                    <div className="col-12 d-block d-md-none mb-2">
                      <div className="d-flex align-items-center mb-2 ">
                        <img
                          src={item.image}
                          className="img-fluid rounded me-3"
                          alt={item.name}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <h6 className="mb-1">{item.name}</h6>
                          <p className="mb-1">Price: ₹{item.price}</p>
                          <p className="mb-1 fw-semibold">
                            Total: ₹{(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <button
                            className="btn btn-sm btn-outline-secondary me-2"
                            onClick={() =>
                              handleQuantityChange(item.productId, -1)
                            }
                          >
                            -
                          </button>
                          <span className="fw-bold">{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-outline-secondary ms-2"
                            onClick={() =>
                              handleQuantityChange(item.productId, 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <FaTrash
                          className="text-danger"
                          role="button"
                          onClick={() => handleDeleteItem(item.productId)}
                          title="Remove from cart"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="col-md-2 d-none d-md-block ">
                      <img
                        src={item.image}
                        className="img-fluid rounded card-product-img"
                        alt={item.name}
                        style={{ maxHeight: "80px" }}
                      />
                    </div>
                    <div className="col-md-2 d-none d-md-block fw-semibold">
                      {item.name}
                    </div>
                    <div className="col-md-2 d-none d-md-block text-center">
                      ₹ {item.price}
                    </div>
                    <div className="col-md-2 d-none d-md-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-sm btn-outline-secondary me-2"
                        onClick={() => handleQuantityChange(item.productId, -1)}
                      >
                        -
                      </button>
                      <span className="fw-bold">{item.quantity}</span>
                      <button
                        className="btn btn-sm btn-outline-secondary ms-2"
                        onClick={() => handleQuantityChange(item.productId, 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="col-md-2 d-none d-md-block text-center fw-bold">
                      ₹ {(item.price * item.quantity).toFixed(2)}
                    </div>
                    <div className="col-md-2 d-none d-md-block text-end">
                      <FaTrash
                        className="text-danger"
                        role="button"
                        onClick={() => handleDeleteItem(item.productId)}
                        title="Remove from cart"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {/* Order Summary Card */}
          {/* <div className="col-lg-3 mt-4 mt-lg-0">
            <div className="card shadow-sm p-3">
              <h5 className="mb-3">Order Summary</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Subtotal</span>
                  <span>₹ {subtotal.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Shipping</span>
                  <span>₹ {SHIPPING_COST.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>₹ {total.toFixed(2)}</span>
                </li>
              </ul>
              <button
                style={{
                  color:"white",
                  backgroundColor: "#d91374"
                }}
                className="btn mt-3 w-100"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                Safe to Checkout
              </button>
            </div>
          </div> */}

          <div className="col-md-3">
            <button
            style={{
              color: "white",
              backgroundColor: "#d91374",
            }}
            className="btn mt-3 w-100"
            onClick={handleCheckout}
            disabled={cartItems.length === 0}
          >
            Safe to Checkout
          </button>
          </div>
          
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
