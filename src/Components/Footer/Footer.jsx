import React from 'react';
import './Footer.css';
import logo from '../../assets/cover.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="emailSubscribe">
        <h2>Subscribe to our Newsletter</h2>
        <div className="subscribe-container">
          <div className="icon">
            <i className="fas fa-envelope"></i>
          </div>
          <input
            type="email"
            placeholder="Input your email"
            className="subscribe-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
      
      <div className="details">
        <img src={logo} alt="Company Logo" />
        <ul>
          <li>Pricing</li>
          <li>About Us</li>
          <li>Features</li>
          <li>Help Center</li>
          <li>Contact Us</li>
          <li>FAQs</li>
          <li>Career</li>
        </ul>
      </div>
      
      <hr />
      <div className='contact-more'>
        <input type="text" />
        <p>©️ 2024 Brand, Inc | Privacy | Terms | Sitemap</p>
      </div>
    </footer>
  );
};

export default Footer;