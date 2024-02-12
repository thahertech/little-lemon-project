import React from 'react';
import aboutImage from '../assets/AboutUs.jpg'


const AboutPage = () => {
  return (
    <div className='Aboutus-container'>

      <div className='Aboutus-content'>
        <h1>Little Lemon 🍋</h1>
        <h2>Chicago</h2>
    <h4>

At Little Lemon, we take pride in being a family-owned Mediterranean restaurant,
bringing the warmth of traditional recipes with a modern twist to the heart of
Chicago. Our culinary journey is inspired by the rich flavors of the Mediterranean,
offering a delightful fusion of authenticity and innovation.</h4>
</div>
<img src={aboutImage} alt='Fish Food'/>

</div>


  );
};

export default AboutPage;
