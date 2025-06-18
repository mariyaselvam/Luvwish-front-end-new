// src/App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Auth Pages (Public)
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyOtp from "./pages/VerifyOtp";

// Public Policies
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ShippingAndCancellationPolicy from "./pages/ShippingAndCancellationPolicy";
import ReturnsAndRefundPolicy from "./pages/ReturnsAndRefundPolicy";

// App Pages (Protected)
import Home from "./pages/Home";
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

          {/* ✅ Public Auth & Info Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/shipping-cancellation" element={<ShippingAndCancellationPolicy />} />
          <Route path="/returns-refundPolicy" element={<ReturnsAndRefundPolicy />} />

          {/* 🔐 All App Routes Protected */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/faq" element={<Faq />} />
                  <Route path="/contact" element={<ContactUs />} />
                  <Route path="/products" element={<ProductListing />} />
                  <Route path="/period-calculator" element={<PeriodCalculator />} />
                  <Route path="/product/:productId" element={<ProductDetailComponent />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/coins" element={<CoinsPage />} />
                  <Route path="/logout" element={<Logout />} />
                </Routes>
              </ProtectedRoute>
            }
          />

          {/* 🔐 Admin Route */}
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
