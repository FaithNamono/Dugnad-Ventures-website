import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialIcons from './SocialIcons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <Logo />
            <p>Celebrating Ugandan Art and Culture through contemporary and traditional expressions.</p>
            <SocialIcons />
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/exhibitions">Exhibitions</Link>
              <Link to="/artists">Artists</Link>
            </div>
            <div className="footer-column">
              <h4>Categories</h4>
              <Link to="/gallery?category=painting">Paintings</Link>
              <Link to="/gallery?category=sculpture">Sculpture</Link>
              <Link to="/gallery?category=photography">Photography</Link>
              <Link to="/gallery?category=crafts">Crafts</Link>
            </div>
            <div className="footer-column">
              <h4>Contact Info</h4>
              <p>📍 Kampala Road, Uganda</p>
              <p>📞 +256 740256465</p>
              <p>✉️ gallery@dugnadventures.com</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Dugnad Art Gallery. Part of Dugnad Ventures Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;