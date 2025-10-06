import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-main">
        <div className="footer-section">
          <h2>Company</h2>
          <ul>
            <li><span className="footer-icon">&rsaquo;</span> <a href="#about">About Us</a></li>
            <li><span className="footer-icon">&rsaquo;</span> <a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Contact</h2>
          <ul>
            <li><span className="footer-icon">&#x1F4CD;</span> No 57, Dabulla Road, Badagamuwa, Kurunagala, Srilanka</li>
            <li><span className="footer-icon">&#x260E;</span> +94 769 990 990</li>
            <li><span className="footer-icon">&#x2709;</span> info@epitomehotel.com</li>
          </ul>
          <div className="footer-social">
            <a href="https://www.facebook.com/p/Richwin-Hotel-kurunegala-100054352085094/"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <span>
          &copy; <a href="https://epitomehotel.com" className="footer-link">The Epitome Hotel</a>, All Right Reserved. 
        </span>
        <div className="footer-links">
          <a href="#home">Home</a>
          <span className="footer-sep">|</span>
          <a href="#faqs">FAQs</a>
        </div>
        <div className="footer-up">
          <button className="footer-up-btn" title="Go to top">&#8593;</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;