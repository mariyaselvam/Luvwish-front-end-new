import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="banner-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-cont-wrap">
                <h1>Meet Your New Period Bestie Luvwish Period Kit </h1>

                <span>Stay Fresh Stay Fearless</span>

                <Link to="/products" className="primary-btn"
                 style={{
                  display:"block",
                  maxWidth:"fit-content"
                 }}
                 >
                    Shop Now 
                </Link>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
