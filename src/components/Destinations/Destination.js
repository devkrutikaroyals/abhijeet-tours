import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Destination.css";

import MumbaiImage from "../images/mumbai.jpg";
import PuneImage from "../images/pune.jpg";
import GoaImage from "../images/goa.jpg";
import NagpurImage from "../images/nagpur.jpg";

// Destination data
const destinations = [
  {
    name: "Mumbai",
    image: MumbaiImage,
    description: "Explore the city of dreams with comfort and ease.",
    phone: "+91 8097539306" // Replace with your contact number
  },
  {
    name: "Pune",
    image: PuneImage,
    description: "Book a cab for a seamless journey to Pune.",
    phone: "+91 8097539306"
  },
  {
    name: "Goa",
    image: GoaImage,
    description: "Relax on the beaches of Goa with our premium service.",
    phone: "+91 8097539306"
  },
  {
    name: "Nagpur",
    image: NagpurImage,
    description: "Discover the orange city with our reliable cabs.",
    phone: "+91 8097539306"
  }
];

const Destination = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="destination-page">
      <h1 data-aos="fade-down">Popular Destinations</h1>

      <div className="destination-container">
        {destinations.map((place, index) => (
          <div key={index} className="destination-card" data-aos="zoom-in">
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            {/* Call button */}
            <a href={`tel:${place.phone}`} className="book-now">
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
