import React from "react";
import BendArow from "../../assets/images/why-choose-us/bend-arrow.svg";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <>
      <section className="why-choose-us-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="why-choose-us-tit-wrap">
                <h3>Why luvwish ?</h3>
                <p>
                  Stay fresh, stay fearless — anytime, anywhere Luvwish Your
                  pocket-friendly period’s kit on the go
                </p>
                <Link to="/products" className="primary-btn">Get Yours Now</Link>

                <div className="arow-img">
                  <img src={BendArow} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-6">
                  <div className="Why-luvwish-card">
                    <h4 className="Why-luvwish-card-tit">
                      Convenient & Compact
                    </h4>
                    <p>A sleek, all-in-one solution for hassle-free periods</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="Why-luvwish-card">
                    <h4 className="Why-luvwish-card-tit">
                      Hygienic & Safe
                    </h4>
                    <p>Our products are individually packed for optimal cleanliness </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="Why-luvwish-card">
                    <h4 className="Why-luvwish-card-tit">
                      Sustainable & Thoughtful
                    </h4>
                    <p>We prioritize eco-conscious materials and responsible disposal</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="Why-luvwish-card">
                    <h4 className="Why-luvwish-card-tit">
                      For Every Woman, Everywhere
                    </h4>
                    <p>Whether you’re a student, a traveler, or a busy professional, Luvwish is designed for you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
