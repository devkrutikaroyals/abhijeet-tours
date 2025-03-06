import React from "react";
import { useInView } from "react-intersection-observer";
import "./Service.css";
import { FaCarSide, FaStar, FaPlane, FaBusinessTime, FaUserTie, FaGift } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Service = () => {
  const { ref: serviceRef, inView: isServiceVisible } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% is visible
  });

  return (
    <div ref={serviceRef} className={`service-page ${isServiceVisible ? "visible" : ""}`}>
      {/* Hero Section */}
      <div className="hero-section d-flex align-items-center justify-content-center">
        <div className="hero-overlay text-center text-white">
          <h1>Premium Cab Services in Nagpur</h1>
          <p>From luxury to daily rides – we have it all!</p>
          <button className="btn btn-warning btn-lg">Explore Services</button>
        </div>
      </div>

      {/* Car Services Section */}
      <div className="container services-section text-center mt-5">
        <h2 className="mb-4">Our Car Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="service-card p-4">
              <FaGift className="icon fs-1" />
              <h4>Wedding Car Service</h4>
              <p>Make your special day grand with our luxurious wedding cars.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card p-4">
              <FaStar className="icon fs-1" />
              <h4>Luxury Car Rentals</h4>
              <p>Experience top-class rides in premium vehicles.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card p-4">
              <FaPlane className="icon fs-1" />
              <h4>Airport Transfers</h4>
              <p>Reliable and punctual rides to and from the airport.</p>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4">
            <div className="service-card p-4">
              <FaBusinessTime className="icon fs-1" />
              <h4>Corporate Travel</h4>
              <p>Professional chauffeur service for business executives.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card p-4">
              <FaUserTie className="icon fs-1" />
              <h4>Chauffeur Services</h4>
              <p>Elite drivers for a smooth and comfortable ride.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card p-4">
              <FaCarSide className="icon fs-1" />
              <h4>Daily City Rides</h4>
              <p>Affordable and convenient transport for everyday needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
