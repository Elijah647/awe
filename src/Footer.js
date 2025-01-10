import React from "react";
import mainImg from "./assets/bread.png";

const Footer = () => {
    
    
    return (

        <footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <img src={mainImg} alt="Little Lemon Logo" />
    </div>
    <div className="footer-links">
      <h4>Links</h4>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#reservations">Reservations</a></li>
      </ul>
    </div>
    <div className="footer-contact">
      <h4>Contact Us</h4>
      <ul>
        <li>Address</li>
        <li>Twitter</li>
        <li>Email</li>
      </ul>
    </div>
    <div className="footer-follow">
      <h4>Follow Us</h4>
      <ul>
        <li><a href="#facebook">Facebook</a></li>
        <li><a href="#twitter">Twitter</a></li>
        <li><a href="#instagram">Instagram</a></li>
      </ul>
    </div>
  </div>
</footer>
    )
};

export default Footer;