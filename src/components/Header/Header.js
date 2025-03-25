import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../Header/Header.css";
import logo from "../images/logo (1).png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        {/* Logo Container (Left Side) */}
        <div className="logo-container">
          <Link to="/" className="logo">
            <img src={logo} alt="Abhijeet Tour & Travels Logo" className="logo-image" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Navigation Links */}
        <nav className={`nav-container ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
           
            <li><Link to="/taxi-rent" onClick={() => setIsOpen(false)}>Taxi Rent</Link></li>
            <li><Link to="/our-route" onClick={() => setIsOpen(false)}>Route</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
