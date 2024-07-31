import React from 'react';
import './Gallery.css';

const images = [
  'https://via.placeholder.com/800x400/ff0000/ffffff?text=Photo+1',
  'https://via.placeholder.com/800x400/ff0000/ffffff?text=Photo+2',
  'https://via.placeholder.com/800x400/ff0000/ffffff?text=Photo+3',
  'https://via.placeholder.com/800x400/ff0000/ffffff?text=Photo+4',
  'https://via.placeholder.com/800x400/ff0000/ffffff?text=Photo+5',
  'https://via.placeholder.com/800x400/ff0000/ffffff?text=Photo+6',
  'https://lh6.googleusercontent.com/proxy/2qMKbpv3vomFIt5hI_Rxy6fuNTDBuQMR7IC6wx-4fWYguoWKNXz27FwuwLmNS-iMQa8CqHyPEDrcWIyW8WikWY8gd20NVuoMCgv7uxST8nxBbNq5z0YZYs7mzhStq_Q',
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery Photo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
