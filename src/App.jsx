import React from 'react';
import Home from './components/Home';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <div className="main" data-theme="dark">
    <Router basename='/sample3/'>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App
