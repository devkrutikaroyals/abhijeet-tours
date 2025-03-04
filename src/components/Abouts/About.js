import React, { useState } from "react";
import "./About.css";
import { FaCar, FaUsers, FaHandshake } from "react-icons/fa";

const About = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I book a cab?",
      answer:
        "You can book a cab through our website or by calling our customer service helpline.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, credit/debit cards, and online payment options.",
    },
    {
      question: "Are your drivers licensed?",
      answer: "Yes, all our drivers are fully licensed and trained professionals.",
    },
    {
      question: "Can I schedule a ride in advance?",
      answer: "Yes, you can schedule a ride in advance through our booking system.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-overlay">
          <h1>About Our Cab Service</h1>
          <p>Your Reliable Travel Partner</p>
        </div>
      </div>

      {/* Information Cards */}
      <section className="info-cards">
        <div className="info-card">
          <FaCar className="info-icon" />
          <h3>Who We Are</h3>
          <p>
            We are a trusted cab service provider, offering safe, comfortable,
            and affordable rides across various locations.
          </p>
        </div>
        <div className="info-card">
          <FaHandshake className="info-icon" />
          <h3>Our Mission</h3>
          <p>
            To provide high-quality, customer-friendly transportation services
            with experienced drivers and well-maintained vehicles.
          </p>
        </div>
        <div className="info-card">
          <FaUsers className="info-icon" />
          <h3>Why Choose Us?</h3>
          <p>
            24/7 customer support, a fleet of well-maintained cars, and easy
            online booking for a seamless travel experience.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span>{openFAQ === index ? "➖" : "➕"}</span>
              </button>
              {openFAQ === index && <p className="faq-answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
