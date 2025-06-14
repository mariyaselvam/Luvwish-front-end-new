import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import before from "../../assets/images/customer-feedback/before.svg";
import img1 from "../../assets/images/customer-feedback/cus-img-1.jpg";
import img2 from "../../assets/images/customer-feedback/cus-img-2.jpg";
import img3 from "../../assets/images/customer-feedback/customer-3.png";

const CustomerFeedback = () => {
  return (
    <>
      <section className="customer-feedback-sec sec-p">
        <div className="customer-feedback-sec-tit-wrap text-center">
          <h2 className="pink-tit">Shared by Her Trusted by Many</h2>
          <p>
            Hear from the women who made Luvwish part of their journey — their
            stories, in their words
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 300 }}
                loop={true}
              >
                <SwiperSlide>
                  <div className="customer-feedback-card-wrap">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="customer-feedback-card">
                          <div className="customer-feedback-card-img">
                            <img src={img1} alt="" />
                          </div>

                          <h3>Helen Of Sparta</h3>
                          <p>
                            “ Finally a product that understands what girls
                            really need during their periods .Everything I need
                            in a one cute pack”
                          </p>

                          <span></span>

                          <div className="customer-feedback-card-inner-img1">
                            <img src={before} alt="" />
                          </div>
                          <div className="customer-feedback-card-inner-img2">
                            <img src={before} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="customer-feedback-card">
                          <div className="customer-feedback-card-img">
                            <img src={img2} alt="" />
                          </div>

                          <h3>Nithya Prakash</h3>
                          <p>
                            “Aadhyam thanne oru big thanks parayatte ingane oru
                            adipoli product konduvannathil.. Pain relief patches
                            is just magical for me! Pain kaaranam 3 days onnum
                            cheyyaan pattaatha avastha aayirnnu kore aayitt..
                            Enthu cheythittum korayaatha ee pain ithukond
                            korayum enn vallya hope ndaayirnnilla. But it worked
                            wonder!! Thankyou so much Luvwish for putting up
                            these things for us girls. Felt your genuine concern
                            through the product quality!. Thankyouu”
                          </p>

                          <span></span>

                          <div className="customer-feedback-card-inner-img1">
                            <img src={before} alt="" />
                          </div>
                          <div className="customer-feedback-card-inner-img2">
                            <img src={before} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        <div className="customer-feedback-card">
                          <div className="customer-feedback-card-img">
                            <img src={img3} alt="" />
                          </div>

                          <h3>Nazriya</h3>
                          <p>
                            "I was really scared when my period started at
                            school, but this kit had everything. It made me feel
                            calm and prepared”
                          </p>

                          <span></span>

                          <div className="customer-feedback-card-inner-img1">
                            <img src={before} alt="" />
                          </div>
                          <div className="customer-feedback-card-inner-img2">
                            <img src={before} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="customer-feedback-card-wrap">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="customer-feedback-card">
                          <div className="customer-feedback-card-img">
                            <img src={img1} alt="" />
                          </div>

                          <h3>Helen Of Sparta</h3>
                          <p>
                            “ Finally a product that understands what girls
                            really need during their periods .Everything I need
                            in a one cute pack”
                          </p>

                          <span></span>

                          <div className="customer-feedback-card-inner-img1">
                            <img src={before} alt="" />
                          </div>
                          <div className="customer-feedback-card-inner-img2">
                            <img src={before} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="customer-feedback-card">
                          <div className="customer-feedback-card-img">
                            <img src={img2} alt="" />
                          </div>

                          <h3>Nithya Prakash</h3>
                          <p>
                            “Aadhyam thanne oru big thanks parayatte ingane oru
                            adipoli product konduvannathil.. Pain relief patches
                            is just magical for me! Pain kaaranam 3 days onnum
                            cheyyaan pattaatha avastha aayirnnu kore aayitt..
                            Enthu cheythittum korayaatha ee pain ithukond
                            korayum enn vallya hope ndaayirnnilla. But it worked
                            wonder!! Thankyou so much Luvwish for putting up
                            these things for us girls. Felt your genuine concern
                            through the product quality!. Thankyouu”
                          </p>

                          <span></span>

                          <div className="customer-feedback-card-inner-img1">
                            <img src={before} alt="" />
                          </div>
                          <div className="customer-feedback-card-inner-img2">
                            <img src={before} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        <div className="customer-feedback-card">
                          <div className="customer-feedback-card-img">
                            <img src={img3} alt="" />
                          </div>

                          <h3>Nazriya</h3>
                          <p>
                            "I was really scared when my period started at
                            school, but this kit had everything. It made me feel
                            calm and prepared”
                          </p>

                          <span></span>

                          <div className="customer-feedback-card-inner-img1">
                            <img src={before} alt="" />
                          </div>
                          <div className="customer-feedback-card-inner-img2">
                            <img src={before} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="customer-feedback-card-wrap">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="customer-feedback-card">
                          <div className="customer-feedback-card-img">
                            <img src={img1} alt="" />
                          </div>

                          <h3>Helen Of Sparta</h3>
                          <p>
                            “ Finally a product that understands what girls
                            really need during their periods .Everything I need
                            in a one cute pack”
                          </p>

                          <span></span>

                          <div className="customer-feedback-card-inner-img1">
                            <img src={before} alt="" />
                          </div>
                          <div className="customer-feedback-card-inner-img2">
                            <img src={before} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="customer-feedback-card">
                          <div className="customer-feedback-card-img">
                            <img src={img2} alt="" />
                          </div>

                          <h3>Nithya Prakash</h3>
                          <p>
                            “Aadhyam thanne oru big thanks parayatte ingane oru
                            adipoli product konduvannathil.. Pain relief patches
                            is just magical for me! Pain kaaranam 3 days onnum
                            cheyyaan pattaatha avastha aayirnnu kore aayitt..
                            Enthu cheythittum korayaatha ee pain ithukond
                            korayum enn vallya hope ndaayirnnilla. But it worked
                            wonder!! Thankyou so much Luvwish for putting up
                            these things for us girls. Felt your genuine concern
                            through the product quality!. Thankyouu”
                          </p>

                          <span></span>

                          <div className="customer-feedback-card-inner-img1">
                            <img src={before} alt="" />
                          </div>
                          <div className="customer-feedback-card-inner-img2">
                            <img src={before} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-6">
                        <div className="customer-feedback-card">
                          <div className="customer-feedback-card-img">
                            <img src={img3} alt="" />
                          </div>

                          <h3>Nazriya</h3>
                          <p>
                            "I was really scared when my period started at
                            school, but this kit had everything. It made me feel
                            calm and prepared”
                          </p>

                          <span></span>

                          <div className="customer-feedback-card-inner-img1">
                            <img src={before} alt="" />
                          </div>
                          <div className="customer-feedback-card-inner-img2">
                            <img src={before} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerFeedback;
