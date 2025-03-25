import React from "react";
import "./Footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/taxi-rent");
    window.scrollTo(0, 0); // Ensures the page loads from the top
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>🚖 Cab Service</h2>
          <p>Your trusted ride partner, ensuring comfort and safety on every journey.</p>
          <button className="book-now-btn" onClick={handleBookNow}>Book Now</button>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">🏠 Home</a></li>
            <li><a href="#">🚕 Services</a></li>
            <li><a href="#">📌 Destinations</a></li>
            <li><a href="#">📞 Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Flat No. 201, Second Floor, Status Enclave, Above HDFC Bank, Ayachit Mandir, Mahal,Nagpur -440 032</p>
          <p><FaPhone /> +91 8097539306</p>
          <p><FaEnvelope /> abhijeetpaunikar8@gmail.com</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="facebook"><FaFacebook /></a>
            <a href="#" className="twitter"><FaTwitter /></a>
            <a href="#" className="instagram"><FaInstagram /></a>
            <a href="#" className="linkedin"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Royals Webtech Pvt.Ltd . All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
