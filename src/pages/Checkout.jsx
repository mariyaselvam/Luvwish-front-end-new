import React, { useState, useEffect } from "react";
import {
  createRazorpayOrder,
  redeemCoins,
  verifyPaymentAndPlaceOrder,
} from "../api/payment";
import { fetchCartItems } from "../api/cartApi";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import { calculateBillingAmount } from "../api/billing";

const Checkout = () => {
  const SHIPPING_COST = 103;

  const [billingData, setBillingData] = useState({
    title: "Mr",
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    houseNumber: "",
    postcode: "",
    city: "",
    country: "India",
    phoneNumber: "",
  });

  const [cartItems, setCartItems] = useState([]);
  const [message, setMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const [coinsInput, setCoinsInput] = useState(0);
  const [coinsUsed, setCoinsUsed] = useState(0);

  const [shippingCharge, setShippingCharge] = useState(0);
  const [coinDiscount, setCoinDiscount] = useState(0);

  // Calculate subtotal and total before state declarations
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  // const subtotal = calculateSubtotal();
  // const total = subtotal + SHIPPING_COST;

  const subtotal = calculateSubtotal();
  const total = subtotal + shippingCharge - coinDiscount;

  const [payableAmount, setPayableAmount] = useState(0);

  useEffect(() => {
    const updateBillingAmount = async () => {
      if (!billingData.state) return;
      try {
        const res = await calculateBillingAmount({
          state: billingData.state,
          coinsUsed: coinsInput,
        });
        if (res.data.success) {
          setShippingCharge(res.data.shippingCharge);
          setCoinDiscount(res.data.coinDiscount);
          setPayableAmount(res.data.payableAmount);
        }
      } catch (err) {
        console.error("Billing update failed:", err);
      }
    };

    updateBillingAmount();
  }, [billingData.state]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const fetchCart = async () => {
    try {
      const response = await fetchCartItems();
      if (Array.isArray(response.data.items)) {
        setCartItems(response.data.items);
      } else {
        console.warn("Cart response is invalid:", response.data);
      }
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleInputChange = (e) => {
    setBillingData({ ...billingData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsProcessing(true);

    const res = await loadRazorpayScript();
    if (!res) {
      setMessage("Razorpay SDK failed to load. Check your internet.");
      setIsProcessing(false);
      return;
    }

    try {
      const { data } = await createRazorpayOrder(payableAmount, billingData);

      if (!data.success) {
        setMessage("Failed to create payment order.");
        setIsProcessing(false);
        return;
      }

      const options = {
        key: "rzp_test_p2tMAD8K94uYcO",
        amount: payableAmount * 100,
        currency: data.order.currency,
        name: "Test Store",
        description: "Purchase from Test Store",
        order_id: data.order.id,
        prefill: {
          name: `${billingData.firstName} ${billingData.lastName}`,
          email: billingData.email,
          contact: billingData.phoneNumber,
        },
        notes: {
          address: `${billingData.street}, ${billingData.houseNumber}, ${billingData.city} - ${billingData.postcode}`,
        },
        theme: {
          color: "#e94d8b",
        },
        handler: async function (response) {
          if (
            !response.razorpay_order_id ||
            !response.razorpay_payment_id ||
            !response.razorpay_signature
          ) {
            setMessage("Missing Razorpay response fields");
            console.error("Missing payment verification fields", response);
            setIsProcessing(false);
            return;
          }

          try {
            const verifyPayload = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              billingData,
              coinsUsed,
            };

            const verifyRes = await verifyPaymentAndPlaceOrder(verifyPayload);

            if (verifyRes.data.message) {
              setMessage("Payment successful and order placed!");
            } else {
              setMessage("Payment verified, but order placement failed.");
            }
          } catch (err) {
            setMessage("Payment verification failed. Please contact support.");
            console.error(err);
          }
          setIsProcessing(false);
        },

        modal: {
          ondismiss: () => {
            setMessage("Payment cancelled.");
            setIsProcessing(false);
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      setMessage("Error processing payment. Try again later.");
      console.error(err);
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Nav />
      <section className="sec-p">
        <div className="container">
          <div className="row">
            {/* Billing Info Form */}
            <div className="col-lg-6">
              <div className="p-4 bg-white shadow rounded">
                <h3>Checkout</h3>
                <p>Fill your billing info and proceed to payment</p>
                <form onSubmit={handlePayment}>
                  <div className="mb-2">
                    <select
                      name="title"
                      className="form-select"
                      value={billingData.title}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Title</option>
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Ms</option>
                      <option>Dr</option>
                    </select>
                  </div>

                  <div className="mb-2">
                    <select
                      name="state"
                      className="form-select"
                      value={billingData.state || ""}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select State</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Karnataka">Karnataka</option>
                      {/* Add other states as needed */}
                    </select>
                  </div>

                  <div className="row g-2 mb-2">
                    <div className="col">
                      <input
                        name="firstName"
                        className="form-control"
                        value={billingData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        name="lastName"
                        className="form-control"
                        value={billingData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                  <input
                    type="email"
                    name="email"
                    className="form-control mb-2"
                    value={billingData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                  />

                  <div className="row g-2 mb-2">
                    <div className="col-8">
                      <input
                        name="street"
                        className="form-control"
                        value={billingData.street}
                        onChange={handleInputChange}
                        placeholder="Street"
                        required
                      />
                    </div>
                    <div className="col-4">
                      <input
                        name="houseNumber"
                        className="form-control"
                        value={billingData.houseNumber}
                        onChange={handleInputChange}
                        placeholder="House No."
                        required
                      />
                    </div>
                  </div>

                  <div className="row g-2 mb-2">
                    <div className="col">
                      <input
                        name="postcode"
                        className="form-control"
                        value={billingData.postcode}
                        onChange={handleInputChange}
                        placeholder="Postcode"
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        name="city"
                        className="form-control"
                        value={billingData.city}
                        onChange={handleInputChange}
                        placeholder="City"
                        required
                      />
                    </div>
                  </div>

                  <input
                    name="country"
                    className="form-control mb-2"
                    value={billingData.country}
                    onChange={handleInputChange}
                    disabled
                  />

                  <input
                    name="phoneNumber"
                    className="form-control mb-3"
                    value={billingData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                  />

            <div className="row mb-3">
              <div className="col-lg-6">
              <input
               
                type="number"
                min={0}
                max={1000}
                value={coinsInput}
                onChange={(e) => setCoinsInput(e.target.value)}
                placeholder="Enter coins to redeem"
                className="form-control"
              />
              </div>
              <button
                type="button"
                className="btn btn-outline-primary col-lg-6"  
                disabled={isProcessing || coinsInput <= 0}
                onClick={async () => {
                  setIsProcessing(true);
                  try {
                    const res = await calculateBillingAmount({
                      state: billingData.state,
                      coinsUsed: coinsInput,
                    });
                    if (res.data.success) {
                      setShippingCharge(res.data.shippingCharge);
                      setCoinDiscount(res.data.coinDiscount);
                      setPayableAmount(res.data.payableAmount);
                      setCoinsUsed(coinsInput);
                    }
                  } catch (err) {
                    console.error("Redeem failed:", err);
                  }
                  setIsProcessing(false);
                }}
              >
                Redeem Coins
              </button>
            </div>

                  <button
                    type="submit"
                    className="btn w-100"
                    style={{
                      backgroundColor: "#e94d8b",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Pay Now"}
                  </button>
                </form>

                {message && (
                  <div className="mt-3 text-center text-info fw-semibold">
                    {message}
                  </div>
                )}
              </div>
              
            </div>



            {/* Order Summary */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="card shadow-sm p-3">
                <h5 className="mb-3">Order Summary</h5>

                {Array.isArray(cartItems) && cartItems.length > 0 ? (
                  cartItems.map((item) => (
                    <div
                      className="d-flex justify-content-between align-items-center mb-3 ps-3 pe-3"
                      key={item.productId}
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="me-3 rounded"
                          style={{
                            width: "60px",
                            height: "60px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <h6 className="mb-1">{item.name}</h6>
                          <small>Qty: {item.quantity}</small>
                        </div>
                      </div>
                      <div className="fw-bold">
                        ₹ {(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Your cart is empty.</p>
                )}

                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Subtotal</span>
                    <span>₹ {subtotal.toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Shipping</span>
                    <span>₹ {Number(shippingCharge || 0).toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Coin Discount</span>
                    <span className="text-success">
                      − ₹ {Number(coinDiscount || 0).toFixed(2)}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>₹ {Number(payableAmount.toFixed(2))}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
