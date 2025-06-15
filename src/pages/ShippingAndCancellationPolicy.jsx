import React from "react";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

const ShippingAndCancellationPolicy = () => {
  return (
    <>
      <Nav />
      <div
        className="container py-5"
        style={{ color: "#333", lineHeight: "1.7" }}
      >
        <h2 className="mb-4 Privacy-Policy-tit">
          Shipping & Cancellation Policy – Luvwish
        </h2>
        <p>
          Welcome to <strong>www.luvwish.in</strong>. Please review our Shipping
          and Cancellation Policy carefully before placing an order. We want to
          ensure a smooth and transparent shopping experience for all our
          customers.
        </p>

        <h5 className="mt-4">Order Processing Time</h5>
        <ul>
          <li>Orders are typically processed within 3–5 business days.</li>
          <li>
            Confirmed payments and valid delivery details help us process orders
            promptly.
          </li>
          <li>
            Day 1 is counted from the business day after your order is placed.
          </li>
          <li>
            During peak seasons, festivals, or sales, processing may take
            slightly longer.
          </li>
        </ul>

        <h5 className="mt-4">Delivery Time</h5>
        <ul>
          <li>
            We ship all orders via <strong>India Post</strong> for reliable
            coverage across India.
          </li>
          <li>
            Delivery after dispatch usually takes 3–5 working days based on your
            location.
          </li>
          <li>
            Tracking details will be sent via SMS or email after shipment.
          </li>
        </ul>

        <h5 className="mt-4">Shipping Charges</h5>
        <p>Shipping charges are based on your location or cart value.</p>

        <h5 className="mt-4">Order Tracking</h5>
        <p>
          Once shipped, tracking details will be shared. You can also log in to
          your Luvwish account to check your order status.
        </p>

        <h5 className="mt-4">International Shipping</h5>
        <p>
          Currently, we do not offer international shipping through our website.
          For special requests, contact us at 📧{" "}
          <a href="mailto:luvwisho@gmail.com">luvwisho@gmail.com</a>.
        </p>

        <h5 className="mt-4">Unboxing Video Requirement</h5>
        <p>
          To report missing, damaged, or incorrect items, a clear unboxing video
          from the moment you open the parcel is mandatory.
        </p>

        <h5 className="mt-4">Bulk Orders</h5>
        <p>
          For bulk, gifting, or wholesale inquiries, contact us at 📧{" "}
          <a href="mailto:support@luvwish.in">support@luvwish.in</a>. Custom
          pricing and delivery timelines apply.
        </p>

        <h5 className="mt-4">Cancellation Policy</h5>
        <ul>
          <li>
            No cancellations are allowed once the order is placed and processed.
          </li>
          <li>
            We do not accept cancellation requests after the order is
            dispatched.
          </li>
          <li>
            If you refuse delivery, shipping and return charges will be deducted
            from your refund (for prepaid orders).
          </li>
        </ul>

        <h5 className="mt-4">Return / Refund Policy</h5>
        <ul>
          <li>
            Returns are not accepted unless the item is received in a damaged or
            defective condition.
          </li>
          <li>
            Refunds apply only for valid claims of missing or damaged items,
            supported by a clear unboxing video within 72 hours of delivery.
          </li>
        </ul>

        <h5 className="mt-4">Modifications After Order</h5>
        <p>
          We can help you change contact or address details{" "}
          <strong>only before dispatch</strong>. We cannot modify ordered items
          after confirmation.
        </p>

        <h5 className="mt-4">Right to Cancel by Luvwish</h5>
        <p>We reserve the right to cancel any order due to:</p>
        <ul>
          <li>Unavailability of stock</li>
          <li>Payment or address verification issues</li>
          <li>Errors in product or pricing information</li>
          <li>Suspected fraudulent activity</li>
        </ul>
        <p>If we cancel your order, a full refund will be issued.</p>

        <h5 className="mt-4">Contact Us</h5>
        <p>
          If you have any questions about shipping or cancellations, feel free
          to contact us:
          <br />
          📧 <a href="mailto:luvwisho@gmail.com">luvwisho@gmail.com</a>
          <br />
          📞 <a href="tel:+919061064554">+91 90610 64554</a>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ShippingAndCancellationPolicy;
