import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Services from "./components/Services/Service";
import TaxiRent from "./components/Taxirents/TaxiRent";
import RoutePage from "./components/Routes/RoutePage";
import RouteDetails from "./components/Routes/RouteDetails";
import About from "./components/Abouts/About";
import Contact from "./components/Contacts/Contact";
import "./App.css"; // Global styles

function App() {
  return (
    <Router>
      <Header />
      <main className="scroll-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/taxi-rent" element={<TaxiRent />} />
          <Route path="/our-route" element={<RoutePage />} />
          <Route path="/route/:id" element={<RouteDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;