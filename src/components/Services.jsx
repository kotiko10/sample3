import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and high-performance websites tailored to your needs.',
    icon: '🌐',
  },
  {
    title: 'Mobile App Development',
    description: 'Creating user-friendly mobile applications for both Android and iOS platforms.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces and experiences.',
    icon: '🎨',
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your website’s visibility and ranking on search engines.',
    icon: '🔍',
  },
  // Add more services as needed
];

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
