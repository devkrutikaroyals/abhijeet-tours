import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Services from "./components/Services/Service";
import Destination from "./components/Destinations/Destination";
import TaxiRent from "./components/Taxirents/TaxiRent";
import RoutePage from "./components/Routepages/RoutePage";
import About from "./components/Abouts/About";
import Contact from "./components/Contacts/Contact";

function App() {
  return (
    <Router>
      <Header />
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/taxi-rent" element={<TaxiRent />} />
          <Route path="/route" element={<RoutePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
