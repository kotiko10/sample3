import React from 'react';
import './Gallery.css';

const images = [
  { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5v9k8iZQEVFSmhK3Oxkb9WkZ--WvGIJx3Q&s', caption: 'Photo text'},
  { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5v9k8iZQEVFSmhK3Oxkb9WkZ--WvGIJx3Q&s', caption: 'photo text'},
  { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4R_bR_tVUQJWtlB6GBUwvnOmKTHvvyNyDeZ5grkYgXY6ZZJKiXLfRWScKs69zJdy9CMg&usqp=CAU', caption: 'photo text'},
  { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwIympClguko8c1R-Ebs10a2iJFTsN181yg&s', caption: 'photo text'},
  { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2cyHJr4r60f2XIahd_IqzEDwkXj-QK6c3g&s', caption: 'photo text'},
  { src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5v9k8iZQEVFSmhK3Oxkb9WkZ--WvGIJx3Q&s', caption: 'photo text'},
  { src:'https://lh6.googleusercontent.com/proxy/2qMKbpv3vomFIt5hI_Rxy6fuNTDBuQMR7IC6wx-4fWYguoWKNXz27FwuwLmNS-iMQa8CqHyPEDrcWIyW8WikWY8gd20NVuoMCgv7uxST8nxBbNq5z0YZYs7mzhStq_Q', caption: 'photo text'},
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.caption} />
          <div className="caption">{image.caption}</div>
        </div>
      ))}
      <div className="gallery-text">
        <p>Our gallery showcases a variety of moments captured through our lenses. Each photo tells a story, representing the essence and beauty of our work. We hope you enjoy browsing through these images as much as we enjoyed creating them.</p>
      </div>
    </div>
  );
};

export default Gallery;
