import X from "../../assets/images/footer/x-twitter.svg"
import Facebook from "../../assets/images/footer/Facebook-app.svg"
import instagram from "../../assets/images/footer/instagram-app.svg"

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

                <h4>Signup and get 50% off on your first order</h4>

                <form action="" className="footer-email-wrap">
                  <input type="email" placeholder="E-mail" required />

                  <button className="footer-mail-sub-btn">Join</button>
                </form>

                <div className="social-meadia-wrap">
                     <div className="social-meadia-wrap-img">
                      <a href="#">
                        <img src={X} alt="" />
                      </a>
                     </div>
                     <div className="social-meadia-wrap-img">
                      <a href="#">
                        <img src={Facebook} alt="" />
                      </a>
                     </div>
                     <div className="social-meadia-wrap-img">
                      <a href="#">
                        <img src={instagram} alt="" />
                      </a>
                     </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h3>Policies</h3>
              <p>
                <a href="#">Privacy Policy</a>
              </p>
              <p>
                <a href="#">Terms & Conditions</a>
              </p>
              <p>
                <a href="#">Shipping & Cancellation</a>
              </p>
              <p>
                <a href="#">Returns & Refunds</a>
              </p>
            </div>
            <div className="col-lg-3">
              <h3>Best Sellers</h3>

              <p>
                <a href="#">Luvwish Period Kit</a>
              </p>
              <p>
                <a href="#">Cramp Relief Patches</a>
              </p>
            </div>
            <div className="col-lg-2">
              <h3>Info</h3>
              <p>
                <a href="#">About Us</a>
              </p>
              <p>
                <a href="#">Buy</a>
              </p>
              <p>
                <a href="#">Periods Calculator</a>
              </p>
              <p>
                <a href="#">Contact Us</a>
              </p>
              <p>
                <a href="#">FAQS</a>
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
    </>
  );
};

export default Footer;
