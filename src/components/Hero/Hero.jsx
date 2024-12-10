import React from 'react';
import './Hero.css';
import hand_icon from '../Assests/hand_icon.png';
import arrow_icon from '../Assests/arrow.png';
import hero_image1 from '../Assests/hero_image1.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>new</p>
            <img src={hand_icon} alt="icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>
      <div className='hero-right'>
        <img className="hero-image" src={hero_image1} alt="Hero" />
      </div>
    </div>
  )
}

export default Hero;
