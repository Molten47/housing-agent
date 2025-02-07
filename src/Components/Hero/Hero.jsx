import React from 'react';
import './Hero.css';
import Footer from '../Footer/Footer';
import ImageGrid from '../ImageGrid/ImageGrid';
import heroImage from '../../assets/bernard-hermant-M0k4llbRpHU-unsplash.jpg';
import faceBook from '../../assets/facebook_2168281.png'
import insta from '../../assets/instagram_733614.png'
import linkedIn from '../../assets/linkedin_3536569.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg'

const Hero = () => {
  return (
    <div className="hero-section">
      <div
        className="hero-display"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-content">
          <h1>Discover Your Dream Home Today</h1>
          <p>Find yourself the perfect home and most comfortable shortlets</p>
          <button type="submit">Search Now</button>
        </div>
      </div>
      <div className="hero-pack">
          <h2>Featured Properties</h2>
            <ImageGrid/>
      </div>
      <hr />
      <div className="hero-links">
      <h2>Quick Links</h2>
      <div className="social-icons">
         <img src={faceBook} alt="" />
         <img src={insta} alt="" />
         <img src={linkedIn} alt="" />
          </div>
      <button>Contact Us</button>
      </div>
      <div className="footer">
      <Footer/>
      </div>
    </div>
  );
};

export default Hero;