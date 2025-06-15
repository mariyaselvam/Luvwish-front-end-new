import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

const ReturnsAndRefundPolicy = () => {
  return (
    <>
      <Nav />
      <div
        className="container py-5"
        style={{ color: "#333", lineHeight: "1.7" }}
      >
        <h2 className="mb-4 Privacy-Policy-tit">Returns & Refund Policy – Luvwish</h2>

        <p>
          At <strong>Luvwish</strong>, we are committed to ensuring a safe and
          thoughtful period care experience for all our customers. However, due
          to the nature of our personal wellness products, Luvwish does not
          provide refunds or accept cancellations once the order is processed.
        </p>
        <p>
          Please review our policy below to understand the conditions under
          which exceptions may apply.
        </p>

        <h5 className="mt-4">Communication and Refunds</h5>
        <ul>
          <li>
            You will be notified if any part of your order is canceled or
            requires additional information.
          </li>
          <li>
            If we are unable to process your order within{" "}
            <strong>45 working days</strong>, a refund will be initiated to your
            original payment method.
          </li>
          <li>
            Refunds typically reflect in your source account within{" "}
            <strong>5–7 business days</strong>, depending on your bank.
          </li>
          <li>
            If you don’t receive your refund within 7 days of confirmation,
            please contact your bank or payment provider directly.
          </li>
        </ul>

        <h5 className="mt-4">Return Eligibility – Damaged Products Only</h5>
        <ul>
          <li>
            Returns are accepted only for products damaged during transit.
          </li>
          <li>
            Contact our support team within <strong>3 days of delivery</strong>{" "}
            with a clear unboxing video as proof.
          </li>
          <li>
            Returns will be approved only after verification by our support
            team.
          </li>
          <li>
            Contact: 📧{" "}
            <a href="mailto:luvwisho@gmail.com">luvwisho@gmail.com</a>
          </li>
        </ul>

        <h5 className="mt-4">Cancellation of Unprocessed Orders</h5>
        <ul>
          <li>Orders can be canceled only before processing begins.</li>
          <li>Cancellation after processing or shipment is not allowed.</li>
          <li>
            Any exceptions will be reviewed on a case-by-case basis, and if
            approved, applicable charges will be deducted before refund.
          </li>
        </ul>

        <h5 className="mt-4">
          Discouragement of Post-Processing Cancellations
        </h5>
        <p>
          To ensure timely delivery, we prioritize fast processing. Therefore,
          cancellations after processing are strongly discouraged.
        </p>

        <h5 className="mt-4">Charges for Cancellations and Returns</h5>
        <ul>
          <li>
            ₹50 will be deducted for cancellations after processing but before
            dispatch (if approved).
          </li>
          <li>
            ₹100 will be deducted for Return to Origin (RTO) cases on prepaid
            orders.
          </li>
        </ul>

        <h5 className="mt-4">Disclaimer</h5>
        <p>
          Luvwish does not conduct any contests, giveaways, or promotions
          offering free products, prizes, or cash rewards via unofficial
          channels. We will never ask for your CVV, OTP, passwords, or PIN.
          Please stay alert and do not respond to suspicious messages or calls.
        </p>

        <h5 className="mt-4">Bulk Orders</h5>
        <p>
          For bulk, gifting, or wholesale orders, please reach out to 📧{" "}
          <a href="mailto:support@luvwish.in">support@luvwish.in</a>. Custom
          pricing and delivery timelines will apply.
        </p>

        <h5 className="mt-4">Need Help?</h5>
        <p>
          For help regarding orders, returns, or policies, feel free to contact
          us:
          <br />
          📧 <a href="mailto:luvwisho@gmail.com">luvwisho@gmail.com</a>
          <br />
          📞 <a href="tel:+919061064554">+91 90610 64554</a>
        </p>

        <p className="mt-4">
          We’re here to help and ensure a seamless experience with Luvwish.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ReturnsAndRefundPolicy;
