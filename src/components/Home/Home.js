import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import { FaWhatsapp, FaPhone, FaSuitcase } from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    pickupLocation: "",
    destination: "",
    dateTime: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (!bookingDetails.pickupLocation || !bookingDetails.destination || !bookingDetails.dateTime) {
      alert("Please fill all fields before booking.");
      return;
    }

    const message = `Hello, I want to book a taxi.\n\n🚖 *Booking Details* 🚖\n📍 Pickup: ${bookingDetails.pickupLocation}\n📍 Destination: ${bookingDetails.destination}\n📅 Date & Time: ${bookingDetails.dateTime}`;
    const whatsappURL = `https://wa.me/yourwhatsappnumber?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="hero">
      <div className="hero-overlay" data-aos="fade-in">
        <div className="hero-content">
          <h1 className="hero-title" data-aos="fade-right">Your Taxi Service in Nagpur</h1>
          <p className="hero-text" data-aos="fade-right" data-aos-delay="200">
            Book your ride anywhere from Nagpur with just a call or WhatsApp chat.
          </p>
          <Link to="/about" className="learn-more" data-aos="zoom-in" data-aos-delay="400">
            Learn More <span className="arrow">»</span>
          </Link>
        </div>
      </div>

      <div className="booking-section" data-aos="fade-up">
        <form className="booking-form" onSubmit={handleBooking}>
          <div className="form-group" data-aos="fade-up" data-aos-delay="200">
            <label>Pick-up Location</label>
            <input type="text" name="pickupLocation" placeholder="Enter Pickup Location" value={bookingDetails.pickupLocation} onChange={handleChange} required />
          </div>
          <div className="form-group" data-aos="fade-up" data-aos-delay="400">
            <label>Destination</label>
            <input type="text" name="destination" placeholder="Enter Destination" value={bookingDetails.destination} onChange={handleChange} required />
          </div>
          <div className="form-group" data-aos="fade-up" data-aos-delay="600">
            <label>Date & Time</label>
            <input type="datetime-local" name="dateTime" value={bookingDetails.dateTime} onChange={handleChange} required />
          </div>
          <button type="submit" className="book-btn" data-aos="flip-up" data-aos-delay="800">
            BOOK NOW
          </button>
        </form>
      </div>

      <div className="suitcase-container">
        <button className="suitcase-btn" onClick={toggleMenu} data-aos="zoom-in">
          <FaSuitcase size={30} color="#fff" />
        </button>
        {isOpen && (
          <div className="contact-options up">
            <button className="contact-btn" onClick={() => window.open("https://wa.me/yourwhatsappnumber", "_blank")}>
              <FaWhatsapp size={24} color="#25D366" />
            </button>
            <button className="contact-btn" onClick={() => (window.location.href = "tel:+yourphonenumber")}>
              <FaPhone size={24} color="#fff" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;