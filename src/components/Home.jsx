import React from 'react';
import Slideshow from './Slideshow';
import './home.css';

function Home() {

   const src_img = [
    'https://via.placeholder.com/350',
    'https://via.placeholder.com/350',
    'https://via.placeholder.com/350',
    'https://via.placeholder.com/350',
   ]
  return (
    <div className='home'>
      <div className="info">
        <div className="logo">
          <img src="https://via.placeholder.com/350" alt="Company Logo" />
        </div>
        <div className="text">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci in cumque perspiciatis! Maxime, dolorem eaque. Repellendus impedit sed labore accusamus, at necessitatibus consequatur rem est, corporis molestiae facere magnam nostrum!.</p>
          </div>
      </div>
      <div className="mark">
        <h3>our partners and clients</h3>
      </div>
      <div className="partenrs">
      {
        src_img.map((image,index) => (
          <div key={index} className="partner-item">
          <img src={image} alt={`Partner Photo ${index + 1}`} />
            </div>
        ))
      }
      </div>
      <div className="mark">
        <h3>Fetaured events</h3>
      </div>
      <Slideshow />
    </div>
  );
}

export default Home;
