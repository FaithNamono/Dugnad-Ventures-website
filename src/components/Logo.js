import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => (
  <Link to="/" className="logo">
    <div className="logo-icon">🎨</div>
    <div className="logo-text">
      <span className="logo-main">Dugnad</span>
      <span className="logo-sub">Art Gallery</span>
    </div>
  </Link>
);

export default Logo;