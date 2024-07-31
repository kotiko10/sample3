import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>Email:</strong> contact@example.com</p>
          <button className="email-button" onClick={() => window.location = 'mailto:contact@example.com'}>
            Send Email
          </button>
        </div>
        <div className="map-container">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.021468423719!2d-122.08424958469018!3d37.42206597982533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b9e17a2e19%3A0x4e9aef8e2b1e1e74!2sGoogleplex!5e0!3m2!1sen!2sus!4v1608147610659!5m2!1sen!2sus"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
