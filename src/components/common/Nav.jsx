import { useState, useEffect } from "react";
import Wallet from "../../assets/images/nav/wallet.svg";
import Logo from "../../assets/images/nav/main-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Shop from "../../assets/images/nav/shop.svg";
import Acccunt from "../../assets/images/nav/acccunt.svg";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();


  // Routes for nav menu
  const navLinks = [
    { path: "/", label: "About" },
    { path: "/products", label: "Buy" },
    { path: "/Period-Calculator", label: "Periods Calculator" },
    { path: "/contact", label: "Contact us" },
  ];

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="nav-sec position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="nav-main-wrap d-flex justify-content-between align-items-center">
              <div className="nav-main-logo">
                <Link to="/">
                  <img src={Logo} alt="" />
                </Link>
              </div>

              {/* Hamburger menu (only on mobile) */}
              {isMobile && (
                <button
                  className="hamburger-icon border-0 bg-transparent"
                  onClick={() => setIsMobileMenuOpen(true)}
                  style={{
                    fontSize: "28px",
                    cursor: "pointer",
                    color: "#ff007f",
                    position: "absolute",
                    right: "20px",
                    top: "20px",
                    zIndex: 10,
                  }}
                >
                  &#9776;
                </button>
              )}

              {/* Desktop Nav */}
              {!isMobile && (
                <div className="nav-options-links-wrap d-flex">
                  {navLinks.map((link, idx) => (
                    <Link key={idx} to={link.path} className="nav-options">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              {/* Desktop Wallet Icons */}
              {!isMobile && (
                <div className="nav-profiles-nd-more-wrap d-flex">
                  <div className="wallet-img">
                    <Link to="/coins">
                      <img src={Wallet} alt="" />
                    </Link>
                  </div>
                  <div className="wallet-img">
                    <Link to="/signup">
                      <img src={Acccunt} alt="" />
                    </Link>
                  </div>
                  <div className="wallet-img">
                    <Link to="/cart">
                      <img src={Shop} alt="" />
                    </Link>
                  </div>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className="mobile-menu position-fixed top-0 end-0 bg-white p-4"
          style={{
            width: "250px",
            height: "100vh",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.3s ease-in-out",
            zIndex: 998,
          }}
        >
          <button
            className="close-btn border-0 bg-transparent"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              fontSize: "24px",
              position: "absolute",
              top: "20px",
              right: "20px",
              cursor: "pointer",
              color: "#ff007f",
            }}
          >
            &times;
          </button>

          <div className="d-flex flex-column gap-3 mt-5">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                className="nav-options"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Wallet icons in mobile */}
          <div className="mobile-wallets-wrap d-flex gap-2 mt-4">
            <div className="wallet-img">
              <Link to="/coins">
                <img src={Wallet} alt="" />
              </Link>
            </div>
            <div className="wallet-img">
              <Link to="/signup">
                <img src={Acccunt} alt="" />
              </Link>
            </div>
            <div className="wallet-img">
              <Link to="/products">
                <img src={Shop} alt="" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Nav;
