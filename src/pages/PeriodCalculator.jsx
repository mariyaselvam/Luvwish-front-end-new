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

import SignsYourPeriodisComing1 from "../../src/assets/images/Period-Calculator/SignsYourPeriodComing/SignsYourPeriodisComing-1.svg";
import SignsYourPeriodisComing2 from "../../src/assets/images/Period-Calculator/SignsYourPeriodComing/SignsYourPeriodisComing-2.svg";
import SignsYourPeriodisComing3 from "../../src/assets/images/Period-Calculator/SignsYourPeriodComing/SignsYourPeriodisComing-3.svg";
import SignsYourPeriodisComing4 from "../../src/assets/images/Period-Calculator/SignsYourPeriodComing/SignsYourPeriodisComing-4.svg";
import SignsYourPeriodisComing5 from "../../src/assets/images/Period-Calculator/SignsYourPeriodComing/SignsYourPeriodisComing-5.svg";
import SignsYourPeriodisComing6 from "../../src/assets/images/Period-Calculator/SignsYourPeriodComing/SignsYourPeriodisComing-6.svg";

import SignsPeriodComing1 from "../../src/assets/images/Period-Calculator/SignsPeriodComing/SignsPeriodComing-1.svg";
import SignsPeriodComing2 from "../../src/assets/images/Period-Calculator/SignsPeriodComing/SignsPeriodComing-2.svg";
import SignsPeriodComing3 from "../../src/assets/images/Period-Calculator/SignsPeriodComing/SignsPeriodComing-3.svg";
import SignsPeriodComing4 from "../../src/assets/images/Period-Calculator/SignsPeriodComing/SignsPeriodComing-4.svg";
import SignsPeriodComing5 from "../../src/assets/images/Period-Calculator/SignsPeriodComing/SignsPeriodComing-5.svg";
import SignsPeriodComing6 from "../../src/assets/images/Period-Calculator/SignsPeriodComing/SignsPeriodComing-6.svg";

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
              <h3
                className="mb-4 PeriodCalculator-main-tit"
                style={{ color: "#e94d8b" }}
              >
                Period Calculator
              </h3>
              <div className="row g-4">
                {/* Form Column */}
                <div className="col-lg-6 col-md-12">
                  <div className="p-4 h-100">
                    {step === 1 && (
                      <div
                        className="mx-auto"
                        style={{ maxWidth: "fit-content" }}
                      >
                        <label
                          className="form-label f-w-700"
                          style={{ color: "#e94d8b" }}
                        >
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
                        <label
                          className="form-label f-w-700"
                          style={{ color: "#e94d8b" }}
                        >
                          How long does your period usually last? (in days)
                        </label>
                        <input
                          type="number"
                          className="form-control mx-auto"
                          value={periodLength}
                          onChange={(e) => setPeriodLength(e.target.value)}
                          style={{
                            border: "2px solid #e94d8b",
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
                        <label
                          className="form-label f-w-700"
                          style={{ color: "#e94d8b" }}
                        >
                          How long is your average menstrual cycle? (in days)
                        </label>
                        <input
                          type="number"
                          className="form-control mx-auto"
                          value={cycleLength}
                          onChange={(e) => setCycleLength(e.target.value)}
                          style={{
                            border: "2px solid #e94d8b",
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
                        <h6
                          className="form-label mb-2 f-w-700"
                          style={{ color: "#e94d8b" }}
                        >
                          Your next menstrual period is expected to start on:
                        </h6>
                        <p
                          className="fw-bold fs-5 mx-auto"
                          style={{
                            height: "200px",
                            maxWidth: "300px",
                            padding: "80px 0",
                            borderRadius: "40px",
                            border: "2px solid #e94d8b",
                          }}
                        >
                          {calculateNextPeriodDate()}
                        </p>
                      </div>
                    )}

                    <div className="d-flex justify-content-between mt-4 flex-wrap gap-2">
                      <button
                        className="btn btn-outline-secondary  w-sm-auto cal-btn"
                        onClick={prevPage}
                        disabled={step === 1}
                      >
                        Previous
                      </button>
                      {step < 4 ? (
                        <button
                          className="btn w-sm-auto cal-btn"
                          onClick={nextPage}
                          style={{ backgroundColor: "#e94d8b", color: "#fff" }}
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          className="btn  w-sm-auto cal-btn"
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
                      <h5 className="f-w-700" style={{ color: "#e94d8b" }}>
                        What is the Menstrual Cycle?
                      </h5>
                      <p className="cal-bottom-para">
                        The menstrual cycle refers to the sequence of events
                        within the body as it prepares for pregnancy every
                        month. The pituitary gland (nervous system) and the
                        ovaries (reproductive system) release certain hormones
                        at certain times during the cycle. These hormones cause
                        the lining of the uterus to thicken, so that an egg can
                        be implanted in the uterus if pregnancy occurs. The
                        hormones also cause the ovaries to release an egg
                        through the fallopian tube where it waits for the sperm.
                        If the sperm doesn’t fertilize the egg, i.e. pregnancy
                        does not take place, the egg along with the uterine
                        lining breaks down and sheds. This is called the
                        menstrual period. 
                      </p>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <h5 className="f-w-700" style={{ color: "#e94d8b" }}>
                        Signs Your Period is Coming
                      </h5>
                      <p className="cal-bottom-para">
                        Changes in the body are imminent during different phases
                        of the menstrual cycle. You can anticipate the onset of
                        your period by using a period calculator and noticing
                        the changes for yourself. There are also period cycle
                        calculator apps that allow you to track your physical
                        and emotional symptoms so you can understand your cycle
                        more closely.
                      </p>

                      <div className="row">
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src={SignsYourPeriodisComing1} alt="" />
                            </div>
                            <div className="SignsYourPeriodisComing-cont-wrap">
                              <h4 className="SignsYourPeriodisComing-card-tit">
                                Breast tenderness
                              </h4>
                              <p>
                                Hormonal spikes in the menstrual cycle lead to
                                breast discomfort.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src={SignsYourPeriodisComing2} alt="" />
                            </div>
                            <div className="SignsYourPeriodisComing-cont-wrap">
                              <h4 className="SignsYourPeriodisComing-card-tit">
                                Mood swings
                              </h4>
                              <p>
                                Premenstrual syndrome (PMS) causes emotional and
                                physical changes like irritability, food
                                cravings, and, in severe cases, depression and
                                anxiety.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src={SignsYourPeriodisComing3} alt="" />
                            </div>
                            <div className="SignsYourPeriodisComing-cont-wrap">
                              <h4 className="SignsYourPeriodisComing-card-tit">
                                Bloating
                              </h4>
                              <p>
                                Lowered progesterone levels cause water
                                retention, resulting in bloating before
                                menstruation.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src={SignsYourPeriodisComing4} alt="" />
                            </div>
                            <div className="SignsYourPeriodisComing-cont-wrap">
                              <h4 className="SignsYourPeriodisComing-card-tit">
                                Acne
                              </h4>
                              <p>
                                Hormonal fluctuations may trigger acne, often
                                seen as red bumps in the lower face, resolving
                                after menstruation.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src={SignsYourPeriodisComing5} alt="" />
                            </div>
                            <div className="SignsYourPeriodisComing-cont-wrap">
                              <h4 className="SignsYourPeriodisComing-card-tit">
                                Cramps
                              </h4>
                              <p>
                                Dysmenorrhea, or cramps, occur before and during
                                menstruation as the uterus sheds its lining.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src={SignsYourPeriodisComing6} alt="" />
                            </div>
                            <div className="SignsYourPeriodisComing-cont-wrap">
                              <h4 className="SignsYourPeriodisComing-card-tit">
                                Vaginal Discharge
                              </h4>
                              <p>
                                Increased progesterone level causes cloudy or
                                white vaginal discharge before menstruation.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <h5 className="f-w-700" style={{ color: "#e94d8b" }}>
                        Signs Of Period Coming Late
                      </h5>
                      <p className="cal-bottom-para">
                        A late period can bring noticeable changes in your body.
                        You might feel bloated, moody, or experience mild cramps
                        without bleeding. Using a late period calculator can
                        help you spot these signs early and understand what your
                        body is trying to tell you
                      </p>

                      <div className="row">
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src={SignsPeriodComing1} alt="" />
                            </div>
                            <div className="SignsYourPeriodisComing-cont-wrap">
                              <h4 className="SignsYourPeriodisComing-card-tit">
                                Pregnancy
                              </h4>
                              <p>
                                Home pregnancy tests can confirm if you’re
                                pregnant
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src={SignsPeriodComing2} alt="" />
                            </div>
                            <div className="SignsYourPeriodisComing-cont-wrap">
                              <h4 className="SignsYourPeriodisComing-card-tit">
                                Stress
                              </h4>
                              <p>
                                Chronic stress disrupts hormone balance;
                                relaxation techniques help
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src={SignsPeriodComing3} alt="" />
                            </div>
                            <div className="SignsYourPeriodisComing-cont-wrap">
                              <h4 className="SignsYourPeriodisComing-card-tit">
                                Weight Changes
                              </h4>
                              <p>
                                Sudden weight fluctuations can delay periods;
                                consult a doctor or nutritionist if needed.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src={SignsPeriodComing4} alt="" />
                            </div>
                            <div className="SignsYourPeriodisComing-cont-wrap">
                              <h4 className="SignsYourPeriodisComing-card-tit">
                                Medical Conditions & Medication
                              </h4>
                              <p>
                                Conditions like PCOS, diabetes, and thyroid
                                issues, along with certain medications, can
                                affect your menstrual cycle.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src={SignsPeriodComing5} alt="" />
                            </div>
                            <div className="SignsYourPeriodisComing-cont-wrap">
                              <h4 className="SignsYourPeriodisComing-card-tit">
                                Menopause
                              </h4>
                              <p>
                                Menopause typically occurs between 45-55; early
                                menopause (POI) can begin as early as 40.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="SignsYourPeriodisComing-card">
                            <div className="SignsYourPeriodisComing-card-img">
                              <img src={SignsPeriodComing6} alt="" />
                            </div>
                            <div className="SignsYourPeriodisComing-cont-wrap">
                              <h4 className="SignsYourPeriodisComing-card-tit">
                                Perimenopause
                              </h4>
                              <p>
                                Delayed periods before menopause, called
                                perimenopause, usually starts in women in their
                                40s.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {step === 4 && (
                    <>
                      <h5 className="f-w-700" style={{ color: "#e94d8b" }}>
                        Conclusion
                      </h5>
                      <p className="cal-bottom-para">
                        The menstrual cycle is a miraculous process of the body
                        and is an important aspect of reproductive health. You
                        can better manage your menstrual as well as overall
                        health by using reliable period calculator tools to keep
                        track of your cycle and your body’s reaction to it.
                        Lastly, it is important to keep in mind that every
                        woman’s cycle is unique and varies depending on their
                        age, lifestyle, stress levels, and underlying medical
                        conditions.
                      </p>
                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                      >
                        {[1, 2, 3, 4].map((tip) => (
                          <SwiperSlide key={tip}>
                            <div
                              className="card p-3"
                              style={{
                                backgroundColor: "#d91374",
                                color: "white",
                                maxWidth: "719px",
                                width: "90%",
                                margin: "0px auto",
                                borderRadius: "20px",
                                textAlign:"center"
                              }}
                            >
                              <h2 className="mb-2" >
                                Real Talk {tip}
                              </h2>

                              {tip === 1 && (
                                <>
                                  <h4>
                                    “ Cycle Length Varies “
                                  </h4>
                                  <p>
                                    A normal menstrual cycle can range from 21 to 35 days
                                  </p>
                                </>
                              )}

                              {tip === 2 && (
                                <>
                                  <h4>
                                    “ You Can Still Get Pregnant “
                                  </h4>
                                  <p>
                                   Ovulation can occur before or after your period, so pregnancy is    
                            possible even if you're not bleeding
                                  </p>
                                </>
                              )}

                              {tip === 3 && (
                                <>
                                  <h4>
                                    “ Cramps Are Caused by Hormones “
                                  </h4>
                                  <p>
                                    Prostaglandins trigger uterine contractions, leading to 
                                     period cramps
                                  </p>
                                </>
                              )}

                              {tip === 4 && (
                                <>
                                  <h4>
                                    “ Periods Can Affect Mood “
                                  </h4>
                                  <p>
                                    Hormonal changes during your cycle can cause mood 
                          swings, anxiety, or irritability
                                  </p>
                                </>
                              )}
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
