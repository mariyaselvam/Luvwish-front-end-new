import Nav from "../components/common/Nav";
import AboutUs from "../components/home/AboutUs";
import Banner from "../components/home/Banner";
import HowItWorks from "../components/home/HowItWorks";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Footer from "../components/common/Footer";
import { useEffect, useState } from "react";
import giftIocn from "../../src/assets/images/common/gift.svg"


const Home = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const justLoggedIn = localStorage.getItem("justLoggedIn");
    const userData = localStorage.getItem("user");

    if (justLoggedIn && userData) {
      const user = JSON.parse(userData);
      setCoins(user.coins || 0);
      setShowPopup(true);

      // remove the flag after showing once
      localStorage.removeItem("justLoggedIn");
    }
  }, []);
  
  return (
    <>
      <Nav />
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="gift-icon">
              <img src={giftIocn} alt="" />
            </div>
            <h3> Congratulations</h3>
            <p>
              Just signed up and got <strong>₹{coins}</strong> instantly credited!
            </p>
            <button className="popup-overlay-close-btn"  onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )} 
      <Banner />
      <AboutUs />
      <WhyChooseUs />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default Home;
