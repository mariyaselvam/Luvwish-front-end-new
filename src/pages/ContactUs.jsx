import { useState } from "react";
import Footer from '../components/common/Footer';
import Nav from '../components/common/Nav';
import Mail from "../assets/images/contact-us/Mail.svg";
import whatsapp from "../assets/images/contact-us/whatsapp.svg";
import Phone from "../assets/images/contact-us/phone.svg";
import X from "../assets/images/contact-us/X.svg";
import Facebook from "../assets/images/contact-us/facebook.svg";
import Instagram from "../assets/images/contact-us/instagram.svg";
import { sendContactForm } from "../api/Contact"; // ✅ Adjust path if needed

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await sendContactForm(formData);
      setSuccessMsg("✅ Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: ""
      });
    } catch (error) {
      console.error(error);
      setErrorMsg("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <section className="contact-us-sec sec-p">
        <h1 className="text-center">Contact Us</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="contact-us-form-wrap">
                <h3 className="contact-us-form-wrap-tit">Send Us a Message</h3>
                <p>Do you have any question? Complaint? Or need any help to choose the right product from Luvwish? Feel free to contact us.</p>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <h3>First Name</h3>
                      <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <h3>Last Name</h3>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <h3>E-mail</h3>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <h3>Contact Details</h3>
                      <input
                        type="number"
                        placeholder="Enter your number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <h3>Message</h3>
                      <input
                        type="text"
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <button
                        className="contact-us-form-btn"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send a message"}
                      </button>
                    </div>

                    {successMsg && (
                      <div className="col-12">
                        <p className="text-success mt-3">{successMsg}</p>
                      </div>
                    )}
                    {errorMsg && (
                      <div className="col-12">
                        <p className="text-danger mt-3">{errorMsg}</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-us-form-card">
                <h3 className="contact-us-form-card-tit">Contact Info</h3>
                <div className="contact-us-form-card-inner-card">
                  <div className="contact-us-form-card-inner-card-icons">
                    <img src={Phone} alt="Phone" />
                  </div>
                  <p>+91 12345 67890</p>
                </div>
                <div className="contact-us-form-card-inner-card">
                  <div className="contact-us-form-card-inner-card-icons">
                    <img src={whatsapp} alt="WhatsApp" />
                  </div>
                  <p>+91 12345 67890</p>
                </div>
                <div className="contact-us-form-card-inner-card">
                  <div className="contact-us-form-card-inner-card-icons">
                    <img src={Mail} alt="Mail" />
                  </div>
                  <p>mail@gmail.com</p>
                </div>

                <div className="contact-us-form-card-inner-bottom-card">
                  <span>Connect with us</span>
                  <div className="social-links">
                    <a className="social-links-each" href="#">
                      <img src={X} alt="X" />
                    </a>
                    <a className="social-links-each" href="#">
                      <img src={Facebook} alt="Facebook" />
                    </a>
                    <a className="social-links-each" href="#">
                      <img src={Instagram} alt="Instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
