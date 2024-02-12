import React from 'react';
import logo from '../assets/footerLogo.jpg'

const Footer = () => {
  return (
    <footer>
      &copy; 2024 Little Lemon
      <img src={logo} alt='Little Lemon Logo' width='30%'/>
    </footer>
  );
};

export default Footer;