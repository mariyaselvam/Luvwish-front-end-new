import React, { useState } from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../src/assets/images/Period-Calculator/img-1.svg";
import img2 from "../../src/assets/images/Period-Calculator/img-2.svg";
import img3 from "../../src/assets/images/Period-Calculator/img-3.svg";
import img4 from "../../src/assets/images/Period-Calculator/img-4.svg";

const PeriodCalculator = () => {
  const [step, setStep] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [periodLength, setPeriodLength] = useState("");
  const [cycleLength, setCycleLength] = useState("");

  const calculateNextPeriodDate = () => {
    if (!startDate || !cycleLength) return "";
    const nextDate = new Date(startDate);
    nextDate.setDate(nextDate.getDate() + parseInt(cycleLength));
    return nextDate.toDateString();
  };

  const nextPage = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevPage = () => setStep((prev) => Math.max(prev - 1, 1));

  const stepImages = [img1, img2, img3, img4];

  return (
    <>
      <Nav />
      <section className="Period-Calculator-sec py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="row g-4">
                {/* Form Column */}
                <div className="col-lg-6 col-md-12">
                  <div className="p-4 h-100">
                    <h3 className="mb-4" style={{ color: "#e94d8b" }}>
                      Period Calculator
                    </h3>

                    {step === 1 && (
                      <div className="mx-auto" style={{ maxWidth: "fit-content" }}>
                        <label className="form-label" style={{ color: "#e94d8b" }}>
                          When did your last period start?
                        </label>
                        <div className="d-flex justify-content-center">
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="dd MMM yyyy"
                            inline
                            calendarClassName="w-100"
                            className="form-control"
                          />
                        </div>
                        <style>{`
                          .react-datepicker {
                            border: 2px solid #e94d8b;
                            background-color: #ffe6f0;
                            border-radius: 0;
                          }
                          .react-datepicker__day--selected,
                          .react-datepicker__day--keyboard-selected {
                            background-color: #e94d8b !important;
                          }
                        `}</style>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="text-center">
                        <label className="form-label" style={{ color: "#e94d8b" }}>
                          How long does your period usually last? (in days)
                        </label>
                        <input
                          type="number"
                          className="form-control mx-auto"
                          value={periodLength}
                          onChange={(e) => setPeriodLength(e.target.value)}
                          style={{
                            border: "2px solid #e94d8b",
                            backgroundColor: "#ffe6f0",
                            height: "200px",
                            width: "100%",
                            maxWidth: "300px",
                            textAlign: "center",
                            borderRadius: "40px",
                            fontSize: "50px",
                          }}
                        />
                      </div>
                    )}

                    {step === 3 && (
                      <div className="text-center">
                        <label className="form-label" style={{ color: "#e94d8b" }}>
                          How long is your average menstrual cycle? (in days)
                        </label>
                        <input
                          type="number"
                          className="form-control mx-auto"
                          value={cycleLength}
                          onChange={(e) => setCycleLength(e.target.value)}
                          style={{
                            border: "2px solid #e94d8b",
                            backgroundColor: "#ffe6f0",
                            height: "200px",
                            width: "100%",
                            maxWidth: "300px",
                            textAlign: "center",
                            borderRadius: "40px",
                            fontSize: "50px",
                          }}
                        />
                      </div>
                    )}

                    {step === 4 && (
                      <div className="text-center">
                        <h5 className="mb-3" style={{ color: "#e94d8b" }}>
                          Your next menstrual period is expected to start on:
                        </h5>
                        <p
                          className="fw-bold fs-5 mx-auto"
                          style={{
                            height: "200px",
                            maxWidth: "300px",
                            padding: "80px 0",
                            borderRadius: "40px",
                            backgroundColor: "#ffe6f0",
                            border: "2px solid #e94d8b",
                          }}
                        >
                          {calculateNextPeriodDate()}
                        </p>
                      </div>
                    )}

                    <div className="d-flex justify-content-between mt-4 flex-wrap gap-2">
                      <button
                        className="btn btn-outline-secondary  w-sm-auto"
                        onClick={prevPage}
                        disabled={step === 1}
                      >
                        Previous
                      </button>
                      {step < 4 ? (
                        <button
                          className="btn w-sm-auto"
                          onClick={nextPage}
                          style={{ backgroundColor: "#e94d8b", color: "#fff" }}
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          className="btn  w-sm-auto"
                          disabled
                          style={{ backgroundColor: "#e94d8b", color: "#fff" }}
                        >
                          Done
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Image Column */}
                <div className="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
                  <img
                    src={stepImages[step - 1]}
                    alt={`Step ${step}`}
                    className="img-fluid rounded"
                    style={{ maxHeight: "400px", objectFit: "contain" }}
                  />
                </div>
              </div>

              {/* Bottom Full Width Text Section Based on Step */}
              <div className="row mt-4">
                <div className="col-12 p-4">
                  {step === 1 && (
                    <>
                      <h5 style={{ color: "#e94d8b" }}>What is the Menstrual Cycle?</h5>
                      <p>
                        The menstrual cycle refers to the sequence of events within the body as it prepares for pregnancy every month. The pituitary gland (nervous system) and the ovaries (reproductive system) release certain hormones at certain times during the cycle... (truncated for brevity)
                      </p>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <h5 style={{ color: "#e94d8b" }}>Signs Your Period is Coming</h5>
                      <p>
                        Changes in the body are imminent during different phases of the menstrual cycle... (truncated)
                      </p>

                      <div className="row">
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src="" alt="" />
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <h5 style={{ color: "#e94d8b" }}>Signs Of Period Coming Late</h5>
                      <p>
                        A late period can bring noticeable changes in your body... (truncated)
                      </p>
                    </>
                  )}
                  {step === 4 && (
                    <>
                      <h5 style={{ color: "#e94d8b" }}>Conclusion</h5>
                      <p>
                        The menstrual cycle is a miraculous process of the body and is an important aspect of reproductive health... (truncated)
                      </p>
                      <Swiper modules={[Navigation]} spaceBetween={20} slidesPerView={1} navigation>
                        {[1, 2, 3].map((tip) => (
                          <SwiperSlide key={tip}>
                            <div
                              className="card p-3"
                              style={{ backgroundColor: "#ffe6f0", border: "1px solid #e94d8b" }}
                            >
                              <h6 className="mb-2" style={{ color: "#e94d8b" }}>Tip {tip}</h6>
                                <p>{
                                tip === 1
                                  ? "Keeping regular track of your cycle helps spot irregularities early..."
                                  : tip === 2
                                  ? "Drink plenty of water and get enough rest to manage cramps..."
                                  : "If your periods are irregular or excessively painful, consult a doctor."
                              }</p>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </>
                  )}
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

export default PeriodCalculator;
