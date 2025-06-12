import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";
import ProductListing from "./pages/ProductListing";
import ProductDetailComponent from "./pages/ProductDetailComponent";
import CartPage from "./pages/CartPage";
import PeriodCalculator from "./pages/PeriodCalculator";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashboard";
import VerifyOtp from "./pages/VerifyOtp";
import ResetPassword from "./pages/ResetPassword";
import Logout from "./pages/Logout";
import Unauthorized from "./components/admin/Unauthorized"; // ⬅️ Import this
import AdminRoute from "./components/admin/AdminRoute"; // ⬅️ Import this
import CoinsPage from "./pages/CoinsPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/Period-Calculator" element={<PeriodCalculator />} />
          <Route path="/product/:productId" element={<ProductDetailComponent />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/coins" element={<CoinsPage />} />
          
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
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
