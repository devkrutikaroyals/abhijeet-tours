import React, { useState } from "react";
import "./Home.css"; 
import { FaWhatsapp, FaPhone, FaSuitcase } from "react-icons/fa";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    pickupLocation: "",
    destination: "",
    dateTime: "",
  });

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
    alert(`Booking Confirmed!\n${JSON.stringify(bookingDetails, null, 2)}`);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/yourwhatsappnumber", "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+yourphonenumber";
  };

  return (
    <div className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Your Taxi Service in Nagpur</h1>
          <p className="hero-text">
            Book your ride anywhere from Nagpur with just a call or WhatsApp chat.
          </p>
          <a href="#" className="learn-more">
            Learn More <span className="arrow">»</span>
          </a>
        </div>
      </div>

      {/* Booking Section */}
      <div className="booking-section">
        <form className="booking-form" onSubmit={handleBooking}>
          <div className="form-group">
            <label>Pick-up Location</label>
            <input type="text" name="pickupLocation" placeholder="Enter Pickup Location" value={bookingDetails.pickupLocation} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Destination</label>
            <input type="text" name="destination" placeholder="Enter Destination" value={bookingDetails.destination} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Date & Time</label>
            <input type="datetime-local" name="dateTime" value={bookingDetails.dateTime} onChange={handleChange} required />
          </div>

          <button type="submit" className="book-btn">BOOK NOW</button>
        </form>
      </div>

      {/* Suitcase Button with WhatsApp & Call Options */}
      <div className="suitcase-container">
        <button className="suitcase-btn" onClick={toggleMenu}>
          <FaSuitcase size={30} color="#fff" />
        </button>
        {isOpen && (
          <div className="contact-options up">
            <button className="contact-btn" onClick={handleWhatsAppClick}>
              <FaWhatsapp size={24} color="#25D366" />
            </button>
            <button className="contact-btn" onClick={handleCallClick}>
              <FaPhone size={24} color="#fff" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
