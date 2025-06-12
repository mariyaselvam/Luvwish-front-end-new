import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Accordion from "react-bootstrap/Accordion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const FaqSec = () => {
  return (
    <section className="faq-page-sec sec-p">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="w-full max-w-3xl mx-auto">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 300 }}
                loop={true}
              >
                <SwiperSlide>
                  <div className="faq-content-wrap">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          How do I place an order ?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>Step 1 : Select the product of your choice</li>
                            <li>Step 2 : Click on add to cart.</li>
                            <li>Step 3 : Click on procedd to checkout</li>
                            <li>
                              Step 4 : Fill out your address and phone number
                            </li>
                            <li>Step 5 : Choose a payment option</li>
                            <li>Step 6 : Place your order</li>
                            <li>
                              For any further questions, you can mail us to
                              luvwishmailid (For shipment related queries )
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          How can I track my order ?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Once the order is dispatched, you will receive a
                            confirmation email, along with tracking details, or
                            you can log-in to your account and click the order
                            history and know the order status
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How do I know that my order is confirmed ?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            You will receive a confirmation email to the
                            registered Email address once you have placed the
                            order in our website. You can also check the order
                            status in "MY ACCOUNT" section if you are a
                            registered member. If you have not received this
                            e-mail, kindly e-mail us your order number
                            to luvwishemailid
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How do I cancel my order ?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Once an order is dispatched, it cannot be cancelled.
                            But if the order is not dispatched from our
                            warehouse, we can assist you. Please write us to
                            luvwishmailid for further assistance
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="faq-content-wrap">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          How do I place an order ?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>Step 1 : Select the product of your choice</li>
                            <li>Step 2 : Click on add to cart.</li>
                            <li>Step 3 : Click on procedd to checkout</li>
                            <li>
                              Step 4 : Fill out your address and phone number
                            </li>
                            <li>Step 5 : Choose a payment option</li>
                            <li>Step 6 : Place your order</li>
                            <li>
                              For any further questions, you can mail us to
                              luvwishmailid (For shipment related queries )
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          How can I track my order ?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Once the order is dispatched, you will receive a
                            confirmation email, along with tracking details, or
                            you can log-in to your account and click the order
                            history and know the order status
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How do I know that my order is confirmed ?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            You will receive a confirmation email to the
                            registered Email address once you have placed the
                            order in our website. You can also check the order
                            status in "MY ACCOUNT" section if you are a
                            registered member. If you have not received this
                            e-mail, kindly e-mail us your order number
                            to luvwishemailid
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How do I cancel my order ?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Once an order is dispatched, it cannot be cancelled.
                            But if the order is not dispatched from our
                            warehouse, we can assist you. Please write us to
                            luvwishmailid for further assistance
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="faq-content-wrap">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          How do I place an order ?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul>
                            <li>Step 1 : Select the product of your choice</li>
                            <li>Step 2 : Click on add to cart.</li>
                            <li>Step 3 : Click on procedd to checkout</li>
                            <li>
                              Step 4 : Fill out your address and phone number
                            </li>
                            <li>Step 5 : Choose a payment option</li>
                            <li>Step 6 : Place your order</li>
                            <li>
                              For any further questions, you can mail us to
                              luvwishmailid (For shipment related queries )
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          How can I track my order ?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Once the order is dispatched, you will receive a
                            confirmation email, along with tracking details, or
                            you can log-in to your account and click the order
                            history and know the order status
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How do I know that my order is confirmed ?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            You will receive a confirmation email to the
                            registered Email address once you have placed the
                            order in our website. You can also check the order
                            status in "MY ACCOUNT" section if you are a
                            registered member. If you have not received this
                            e-mail, kindly e-mail us your order number
                            to luvwishemailid
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How do I cancel my order ?{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Once an order is dispatched, it cannot be cancelled.
                            But if the order is not dispatched from our
                            warehouse, we can assist you. Please write us to
                            luvwishmailid for further assistance
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </section>
  );
};

export default FaqSec;
