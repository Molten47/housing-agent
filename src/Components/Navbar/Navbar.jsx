import React from 'react';
import './Navbar.css';
import logo from '../../assets/cover.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="nav-side">
        <ul>
          <li><a href="#">Property Listing</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="nav-search">
          <input type="search" name="property-search" placeholder="Search..." />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;