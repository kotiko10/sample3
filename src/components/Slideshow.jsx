import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slideshow.css';

const images = [
  'https://via.placeholder.com/800x400/ff0000/ffffff?text=Slide+1',
  'https://via.placeholder.com/800x400/ff0000/ffffff?text=Slide+2',
  'https://via.placeholder.com/800x400/ff0000/ffffff?text=Slide+3',
  'https://via.placeholder.com/800x400/ff0000/ffffff?text=Slide+4',
  'https://via.placeholder.com/800x400/ff0000/ffffff?text=Slide+5',
];

const Slideshow = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: true,
  };

  return (
    <div className="slideshow">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
            <button className="go-to-gallery" onClick={() => navigate('/gallery')}>
              Go to Gallery
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
