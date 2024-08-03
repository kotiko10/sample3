import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Menu.css';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu">
      <div className="menu-container">
        <FaBars className="menu-icon" onClick={toggleMenu} />
        <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
        <ul className={`menu-list ${menuOpen ? 'open' : ''}`}>
          <FaTimes className="close-icon" onClick={toggleMenu} />
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
          <li><Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
          <li><Link to="/about-us" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
