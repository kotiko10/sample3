import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p>Welcome to our company! We are dedicated to providing the best service possible.</p>
      <div className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to deliver high-quality products that bring value to our customers and make their lives better.</p>
      </div>
      <div className="team">
        <h2>Meet the Team</h2>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 1" />
          <p><strong>John Doe</strong></p>
          <p>CEO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 2" />
          <p><strong>Jane Smith</strong></p>
          <p>CTO</p>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Team Member 3" />
          <p><strong>Mike Johnson</strong></p>
          <p>COO</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
