import React from 'react';
import { Link } from 'react-router-dom';
import './RoutePage.css';

function RoutePage() {
  const routes = [
    { id: 1, name: 'Top 5 Places near Nagpur' },
    { id: 2, name: 'Nagpur To Shirdi' },
    { id: 3, name: 'Nagpur to Ramtek' },
    { id: 4, name: 'Nagpur to Chhindwara' },
    { id: 5, name: 'Top 5 Jungle Safari near Nagpur' },
    { id: 6, name: 'Nagpur - Shegaon' },
    { id: 7, name: 'Nagpur - Pune' },
    { id: 8, name: 'Nagpur - Aurangabad' },
    { id: 9, name: 'Nagpur - Astavinayak' },
    { id: 10, name: 'Nagpur - Shanisingapur' }
   
  ];

  return (
    <div className="route-page">
      <h1>Our Traveling Routes</h1>
      <div className="route-cards">
        {routes.map((route) => (
          <div key={route.id} className="route-card">
            <h3>{route.name}</h3>
            <Link to={`/route/${route.id}`}>
              <button className="view-more-button">View More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoutePage;
