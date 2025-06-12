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

    <div className="container mt-4">
      <div className="p-4 bg-white rounded shadow border text-center">
        <h2 className="mb-3">Welcome, {user.name} 👋</h2>
        <h4>Luvwish Cashback</h4>
        <h4>
          You have <span className="text-success">{user.coins}</span> coin
          {user.coins !== 1 && "s"} 🪙
        </h4>
      </div>
    </div>

    <Footer />

    </>
  );
};

export default CoinsPage;
