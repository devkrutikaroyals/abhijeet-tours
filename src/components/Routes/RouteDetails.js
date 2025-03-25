import React from 'react';
import { useParams } from 'react-router-dom';
import './RouteDetails.css';

// Importing existing images
import ZeroMiles from '../images/zero-milestone.jpg';
import GaneshTekdi from '../images/ganeshtekdi.jpg';
import FutlaLake from '../images/Futla.jpg';
import SitabardiFort from '../images/sitaburdi.jpg';
import hanuman from '../images/hanuman.jpg';
import tajbagh from '../images/tajbagh.jpg';
import naglog from '../images/naglog.jpg';
import dragon from '../images/dragon.jpg';
import ramdham from '../images/ramdham.jpg';
import khindsi from '../images/khindsi.jpg';
import jain from '../images/jain.jpg';
import tadoba from '../images/tadoba.jpg';
import kolaragate from '../images/kolara.jpg';
import pench from '../images/pench1.jpg';
import kanha from '../images/kanha.jpg';
import koradi from '../images/koradi.jpg';
import adasa from '../images/adasa.jpg';
import jamsavli from '../images/jamsavli.jpg';
import chhindwara from '../images/chhindwara.jpg';
import pachmahri from '../images/pachmarhi.jpg';
import shegaon from '../images/Anand.jpg';
import pune from '../images/ramdham.jpg';
import aurangabad from '../images/Ajanta.jpg';
import astavinayak from '../images/ashtavinayak.jpg';
import shanisingapur from '../images/Shani.jpg';
import Shirdi from "../images/shirdi.jpg"; // Correct import

function RouteDetails() {
  const { id } = useParams();
  const routeId = parseInt(id, 10); // Convert id to number

  const routeDetails = {
    1: {
      name: 'Nagpur to Local',
      cards: [
        { name: 'Zero Miles', imageUrl: ZeroMiles },
        { name: 'Ganesh Tekdi', imageUrl: GaneshTekdi },
        { name: 'Futla Lake', imageUrl: FutlaLake },
        { name: 'Sitabardi Fort', imageUrl: SitabardiFort },
        { name: 'Taj Bagh', imageUrl: tajbagh },
        { name: 'Telankhedi Hanuman Mandir', imageUrl: hanuman },
      ],
    },
    2: {
      name: 'Nagpur to Shirdi',
      cards: [
        { name: 'Sai Baba Temple', imageUrl: Shirdi },
      ],
    },
    3: {
      name: 'Nagpur to Ramtek',
      cards: [
        { name: 'Naglok', imageUrl: naglog },
        { name: 'Dragon Palace', imageUrl: dragon },
        { name: 'Ram Dham', imageUrl: ramdham },
        { name: 'Khindsi', imageUrl: khindsi },
        { name: 'Jain Mandir', imageUrl: jain },
      ],
    },
    4: {
      name: 'Nagpur to Chhindwara',
      cards: [
        { name: 'Koradi Mandir', imageUrl: koradi },
        { name: 'Adasa', imageUrl: adasa },
        { name: 'Jamsavli', imageUrl: jamsavli },
        { name: 'Chhindwara', imageUrl: chhindwara },
        { name: 'Pachmarhi', imageUrl: pachmahri },
      ],
    },
    5: {
      name: 'Nagpur to Jungle Safari',
      cards: [
        { name: 'Tadoba', imageUrl: tadoba },
        { name: 'Kolaragate', imageUrl: kolaragate },
        { name: 'Pench', imageUrl: pench },
        { name: 'Kanha Jungle Safari', imageUrl: kanha },
      ],
    },
    6: {
      name: 'Nagpur to Shegaon',
      cards: [
        { name: 'Gajanan Maharaj Temple', imageUrl: shegaon },
      ],
    },
    7: {
      name: 'Nagpur to Pune',
      cards: [
        { name: 'Shaniwar Wada', imageUrl: pune },
      ],
    },
    8: {
      name: 'Nagpur to Aurangabad',
      cards: [
        { name: 'Ajanta Caves', imageUrl: aurangabad },
      ]
    },
    9: {
      name: 'Nagpur to Astavinayak',
      cards: [
        { name: 'Mayureshwar Temple', imageUrl: astavinayak },
      ],
    },
    10: {
      name: 'Nagpur to Shanisingapur',
      cards: [
        { name: 'Shani Temple', imageUrl: shanisingapur },
      ],
    },
  };

  const route = routeDetails[routeId];

  if (!route) {
    return <h1>Route not found!</h1>;
  }

  // Function to handle WhatsApp redirection
  const handleBookNow = (placeName) => {
    const phoneNumber = "8097539306"; // Replace with your WhatsApp number
    const message = `Hello, I want to book a trip to ${placeName}. Please provide details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank"); // Open in a new tab
  };

  return (
    <div className="route-details">
      <h1>{route.name}</h1>
      <div className="route-cards">
        {route.cards.map((card, index) => (
          <div key={index} className="route-card">
            <img src={card.imageUrl} alt={card.name} className="route-image" />
            <h3>{card.name}</h3>
            <button 
              className="book-now-button"
              onClick={() => handleBookNow(card.name)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RouteDetails;
