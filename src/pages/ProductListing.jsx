import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import ProductListingComponent from "../components/product-listing/ProductListingComponent";
import CustomerFeedback from "../components/product-listing/CustomerFeedback";
import Img1 from "../../src/assets/images/product-listing/product-listing-main-sec-iiner-card-img.svg";
import arrow from "../../src/assets/images/product-listing/arrow-small.svg";

const ProductListing = () => {


  return (
    <>
      <Nav />
      <section className="product-listing-main-sec sec-p pink-tit">
        <div className="container">
          <h1>Period Care, Packed with Love</h1>
        </div>
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-4">
              <div className="product-listing-main-sec-iiner-left-card">
                <div className="product-listing-main-sec-iiner-left-card-img">
                  <img src={Img1} alt="" />
                </div>

                <h3 className="pink-tit">
                  Your Monthly Essential, Wrapped in Love
                </h3>

                <button>
                  Shop Now <img src={arrow} alt="" />
                </button>
              </div>
            </div>
            {/* <div className="col-lg-8"> */}
              <ProductListingComponent />
            {/* </div> */}
          </div>
        </div>
      </section>

      <CustomerFeedback />

      <Footer />
    </>
  );
};

export default ProductListing;
