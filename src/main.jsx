import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Menu from './components/Menu';

const App = () => {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/sample3" element={<Home />} />
        <Route path="/sample3/gallery" element={<Gallery />} />
        <Route path="/sample3/contact-us" element={<ContactUs />} />
        <Route path="/sample3/about-us" element={<AboutUs />} />
        <Route path="/sample3/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
