import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Destination.css";

import MumbaiImage from "../images/mumbai.jpg";
import PuneImage from "../images/pune.jpg";
import GoaImage from "../images/goa.jpg";
import NagpurImage from "../images/nagpur.jpg";

const destinations = [
  {
    name: "Mumbai",
    image: MumbaiImage,
    description: "Explore the city of dreams with comfort and ease."
  },
  {
    name: "Pune",
    image: PuneImage,
    description: "Book a cab for a seamless journey to Pune."
  },
  {
    name: "Goa",
    image: GoaImage,
    description: "Relax on the beaches of Goa with our premium service."
  },
  {
    name: "Nagpur",
    image: NagpurImage,
    description: "Discover the orange city with our reliable cabs."
  }
];

const Destination = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="destination-page">
      <h1 data-aos="fade-down">Popular Destinations</h1>
      <p data-aos="fade-up">Book your ride to these top destinations now!</p>

      <div className="destination-container">
        {destinations.map((place, index) => (
          <div key={index} className="destination-card" data-aos="zoom-in">
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>
            <p>{place.description}</p>
            <button className="book-now">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
