import React from "react";
import "./Service.css"; // Import the CSS file

const Services = () => {
  const services = [
    {
      title: "City Taxi",
      description: "Quick and reliable taxi service within Nagpur city.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Outstation Rides",
      description: "Book affordable outstation rides from Nagpur to nearby locations.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Luxury Cars",
      description: "Experience comfort and luxury with our premium car rental service.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Airport Pickup & Drop",
      description: "Hassle-free airport taxi service with on-time pickup and drop.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-description">
        Check out our amazing taxi services.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-text">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
