// src/App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Public Pages
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyOtp from "./pages/VerifyOtp";

// Protected Pages
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";
import ProductListing from "./pages/ProductListing";
import ProductDetailComponent from "./pages/ProductDetailComponent";
import CartPage from "./pages/CartPage";
import PeriodCalculator from "./pages/PeriodCalculator";
import Checkout from "./pages/Checkout";
import CoinsPage from "./pages/CoinsPage";
import Logout from "./pages/Logout";

// Admin
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./components/admin/AdminRoute";
import Unauthorized from "./components/admin/Unauthorized";

// Protection
import ProtectedRoute from "./pages/ProtectedRoute";

import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop /> 
        <Routes>
          {/* ✅ Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />

          {/* 🔒 Protected Routes */}
          <Route
            path="/Faq"
            element={
              <ProtectedRoute>
                <Faq />
              </ProtectedRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/products"
            element={
              <ProtectedRoute>
                <ProductListing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Period-Calculator"
            element={
              <ProtectedRoute>
                <PeriodCalculator />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product/:productId"
            element={
              <ProtectedRoute>
                <ProductDetailComponent />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="/coins"
            element={
              <ProtectedRoute>
                <CoinsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedRoute>
                <Logout />
              </ProtectedRoute>
            }
          />

          {/* 🔐 Admin Protected Route */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
