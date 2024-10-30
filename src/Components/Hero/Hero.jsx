import React from 'react';
import './Hero.css';
import bed from '../../Assets/bed3.avif';
import sofa from '../../Assets/sofa.jpeg';
import chair from '../../Assets/chairs.jpeg';
import hand_icon from '../../Assets/hand_icon.png';
import arrow_icon from '../../Assets/arrow.png';

const Hero = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div>
    <div className="hero">
      <div className="hero-left">
        <h2 data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-delay="100"
            data-aos-once="true">NEW COLLECTION</h2>
        <div>
          <div className="hero-hand-icon">  {/* Fixed typo here */}
            <p data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-delay="300"
            data-aos-once="true">DIWALI SALE</p>
            <img src={hand_icon} alt="Hand icon" />  {/* Added alt attribute */}
          </div>
          <p data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-delay="400"
            data-aos-once="true">50% OFF</p>
          <p data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-delay="200"
            data-aos-once="true">For Festive Homes</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow icon" />  {/* Added alt attribute */}
        </div>
      </div>
      
      <div className="hero-right">
      <div data-aos="zoom-in"
      data-aos-once="true"
      className='relative z-10'>
        <img src={bed} alt="Chairs collection" /> </div> {/* Added alt attribute */}
        <div data-aos="zoom-in"
      data-aos-once="true"
      className='relative z-11'> <img src={sofa} alt="Chairs collection" /> </div> {/* Added alt attribute */}
       <div data-aos="zoom-in"
      data-aos-once="true"
      className='relative z-12'> <img src={chair} alt="Chairs collection" /> </div> {/* Added alt attribute */}
      
        </div>
    </div>
    </div>
    </div>
  );
};

export default Hero;
 