import X from "../../assets/images/footer/x-twitter.svg"
import Facebook from "../../assets/images/footer/Facebook-app.svg"
import instagram from "../../assets/images/footer/instagram-app.svg"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer-logo-and-dis">
                <div className="footer-logo-ing">
                  <img src="" alt="" />
                </div>

                <h4>Everything You Need, Packed with Love</h4>

                <form action="" className="footer-email-wrap">
                  <input type="email" placeholder="E-mail" required />

                  <button className="footer-mail-sub-btn">Join</button>
                </form>

                <div className="social-meadia-wrap">
                     <div className="social-meadia-wrap-img">
                      <Link to="#">
                        <img src={X} alt="" />
                      </Link>
                     </div>
                     <div className="social-meadia-wrap-img">
                      <Link target="_blank" to="https://www.facebook.com/luvwish.in?mibextid=LQQJ4d&rdid=IMVIszYBEi82G69V&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Gnxco3bzg%2F%3Fmibextid%3DLQQJ4d#">
                        <img src={Facebook} alt="" />
                      </Link>
                     </div>
                     <div className="social-meadia-wrap-img">
                      <Link target="_blank" to="https://www.instagram.com/luvwish.in/?igsh=MTB3MTJidzgzcnlobQ%3D%3D&utm_source=qr#">
                        <img src={instagram} alt="" />
                      </Link>
                     </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h3>Policies</h3>
              <p>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </p>
              <p>
                <Link to="/terms-and-conditions">Terms & Conditions</Link>
              </p>
              <p>
                <Link to="/shipping-cancellation">Shipping & Cancellation </Link>
              </p>
              <p>
                <Link to="/returns-refundPolicy">Returns & Refunds</Link>
              </p>

            </div>
            <div className="col-lg-3">
              <h3>Best Sellers</h3>

              <p>
                <Link to="/product/68473575af2baa15ab30d0b7">Luvwish Period Kit</Link>
              </p>
              <p>
                <Link to="/product/683f5e2c55cc5b9786f3dd9d">Cramp Relief Patches</Link>
              </p>
              <p>
                <Link to="/product/684d790d4daf6297b3d73864">Luvwish Sanitary Pad</Link>
              </p>
              <p>
                <Link to="/product/684d7b424daf6297b3d73a62">Luvwish Combo</Link>
              </p>
            </div>
            <div className="col-lg-2">
              <h3>Info</h3>
              <p>
                <Link to="/">About Us</Link>
              </p>
              <p>
                <Link to="/products">Buy</Link>
              </p>
              <p>
                <Link to="/Period-Calculator">Periods Calculator</Link>
              </p>
              <p>
                <Link to="/contact">Contact Us</Link>
              </p>
              <p>
                <Link to="/faq">FAQS</Link>
              </p>
            </div>

            <div className="col-lg-12">
              <h4>
                Everything You Need, Packed with Love
              </h4>

              <p>There are many period care options available, but when you're looking for a smart, pocket-friendly solution, Luvwish is your perfect choice. Our kits are designed with care, combining comfort and convenience to support you wherever you go. From hygiene essentials to freshness boosters, we have thoughtfully packed everything you need in one easy-to-carry kit. Choose our Stay Fresh Wipes for instant cleanliness and confidence on the move. Need a quick refresh during a busy day?   Explore Luvwish — because you deserve comfort, anytime, anywhere.</p>
            </div>
          </div>
        </div>
        
      </section>
      <section className="footer-bottom-sec">
        <div className="container">
          <div className="row">
            <div className="footer-bottom-content">
            <p> Copyrights @2025 Aamukham Creatives. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Footer;
