import React from 'react';
import image from '../assets/HeroImage.jpg'
import '../styles/CallToActionStyles.css';

const CallToAction = () => {
  return (

    <div className="CallToAction">

    <div className='CallToAction-content'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family-owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist. </p>
    </div>
      <img src={image} alt='HeroImage' className="image-column"/>
    </div>
  );
};

export default CallToAction;