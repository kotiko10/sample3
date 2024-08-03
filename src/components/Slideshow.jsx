import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slideshow.css';

const images = [
  'https://magictoolbox.sirv.com/images/magicslideshow/03/image-slideshow-04.jpg?scale.width=1000',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW5v9k8iZQEVFSmhK3Oxkb9WkZ--WvGIJx3Q&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4R_bR_tVUQJWtlB6GBUwvnOmKTHvvyNyDeZ5grkYgXY6ZZJKiXLfRWScKs69zJdy9CMg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwIympClguko8c1R-Ebs10a2iJFTsN181yg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2cyHJr4r60f2XIahd_IqzEDwkXj-QK6c3g&s',
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
