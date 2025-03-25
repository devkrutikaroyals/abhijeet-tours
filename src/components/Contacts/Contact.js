import React from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaUser } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section with Overlay */}
      <div className="contact-hero">
        <div className="overlay">
          <h1>Contact Us</h1>
         
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-card">
          <FaPhone className="icon" />
          <h3>Call Us</h3>
          <p><a href="tel:+918097539306">+91 8097539306</a></p>
        </div>
        <div className="info-card">
          <FaEnvelope className="icon" />
          <h3>Email Us</h3>
          <p><a href="mailto:abhijeetpaunikar8@gmail.com">abhijeetpaunikar8@gmail.com</a></p>
        </div>
        <div className="info-card">
          <FaMapMarkerAlt className="icon" />
          <h3>Visit Us</h3>
          <p>Flat No.201, Second Floor, Status Enclave, Above HDFC Bank, Ayachit Mandir, Mahal, Nagpur-440032</p>
        </div>
      </div>

      {/* Form and Map Side by Side */}
      <div className="form-map-container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form>
            <div className="input-box">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="input-box">
              <FaEnvelope className="input-icon" />
              <input type="email" placeholder="Your Email" required />
            </div>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>

      {/* Quick Contact Options */}
      <div className="quick-contact">
        <a href="https://wa.me/9975143922" className="whatsapp">
          <FaWhatsapp /> Chat on WhatsApp
        </a>
        <a href="tel:+918097539306" className="call">
          <FaPhone /> Call Now
        </a>
      </div>
    </div>
  );
};

export default Contact;
