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

      <section className="sec-p">

      <div className="container">
        <div className="row justify-content-center align-items-center">
        <div
          className="p-5  coin-container shadow text-white text-center col-lg-5"
          style={{ backgroundColor: "#D91374" , borderRadius:"60px" }}
        >
          <h2 className="mb-4">Luvwish Cashback</h2>
          <h4>Available Balance</h4>
          <h1 className="display-4 fw-bold">
            {user.coins} 🪙
          </h1>
        </div>
        </div>
      </div>

      </section>

      <Footer />
    </>
  );
};

export default CoinsPage;
