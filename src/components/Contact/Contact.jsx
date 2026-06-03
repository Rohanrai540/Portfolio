import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_38rxpuj",
        "template_aqtfkrm",
        form.current,
        "Fus64KWYOd8dumsAF"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <ToastContainer />

      {/* Section Title */}
      <div className="section-title wide">
        <h2>CONTACT</h2>
        <div className="title-underline"></div>
        <p>I'd love to hear from you—reach out for any opportunities or questions!</p>
      </div>

      {/* Form Box */}
      <div className="contact-form-box">
        <h3>
          Connect With Me <span>🚀</span>
        </h3>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            required
          />
          <button type="submit" className="contact-submit-btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
