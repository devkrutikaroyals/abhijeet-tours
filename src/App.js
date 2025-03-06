import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";  // ✅ Import Footer
import Home from "./components/Home/Home";
import Services from "./components/Services/Service";
import Destination from "./components/Destinations/Destination";
import TaxiRent from "./components/Taxirents/TaxiRent";
import RoutePage from "./components/Routes/RoutePage";
import RouteDetails from "./components/Routes/RouteDetails";
import About from "./components/Abouts/About";
import Contact from "./components/Contacts/Contact";

import "./App.css"; // Global styles
import Service from "./components/Services/Service";

function App() {
  return (
    <Router>
      <Header />
      <main className="scroll-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/taxi-rent" element={<TaxiRent />} />
          <Route path="/our-route" element={<RoutePage />} />
          <Route path="/route/:id" element={<RouteDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    
      <Footer /> {/* ✅ Ensure Footer is placed after Routes */}
    </Router>
  );
}

export default App;
