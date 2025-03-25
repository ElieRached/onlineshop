import React from "react";



const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>We are a leading online store providing quality products at the best prices.</p>
          </div>
          <div className="footer-section links">
            <h2>Useful Links</h2>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: support@yourstore.com</p>
            <p>Phone: +123 456 789</p>
          </div>
          <div className="footer-section social">
            <h2>Follow Us</h2>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    );
};
    export default Footer;