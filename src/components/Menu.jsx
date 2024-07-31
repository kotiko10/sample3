import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/sample3/">Home</Link></li>
        <li><Link to="/sample3/gallery">Gallery</Link></li>
        <li><Link to="/sample3/contact-us">Contact Us</Link></li>
        <li><Link to="/sample3/about-us">About Us</Link></li>
        <li><Link to="/sample3/services">Services</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
