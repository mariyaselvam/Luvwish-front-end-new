// src/pages/CoinsPage.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";

const CoinsPage = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading your coin balance...</p>;
  if (!user) return <p className="text-danger">Not logged in</p>;

  return (
    <>
      <Nav />

      <section className="sec-p coin-sec">

      <div className="container">
        <div className="row justify-content-center align-items-center">
        <div
          className="p-5  coin-container shadow text-white"
          style={{ backgroundColor: "#d91374" , borderRadius:"60px" }}
        >
          <h2 className="mb-4">Luvwish Cashback</h2>
          <p>Receive ₹60 as a welcome bonus upon signing up.Continue earning ₹10 with each purchase.Once your balance reaches ₹100, you're eligible to redeem it for purchases</p>
          <div className="cash-coin-wrap">
          <h4>Available Balance</h4>
          <h3 className="display-4 fw-bold">
            {user.coins} Rs
          </h3>
          </div>
        </div>
        </div>
      </div>

      </section>

      <Footer />
    </>
  );
};

export default CoinsPage;
