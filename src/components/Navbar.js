import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Logo />
        
        <div className={`nav-links ${isMenuOpen ? 'nav-links-active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/')}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/gallery" 
            className={`nav-link ${isActive('/gallery')}`}
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <Link 
            to="/exhibitions" 
            className={`nav-link ${isActive('/exhibitions')}`}
            onClick={closeMenu}
          >
            Exhibitions
          </Link>
          <Link 
            to="/artists" 
            className={`nav-link ${isActive('/artists')}`}
            onClick={closeMenu}
          >
            Artists
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact')}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;