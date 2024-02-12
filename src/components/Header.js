import React from 'react';
import '../styles/HeaderStyles.css';
import logo from '../assets/headerLogo.png';
import Nav from './Nav';

const Header = () => {
  return (

  <header className="header">

    <img src={logo} alt="Little Lemon Logo" />
      <Nav />
  </header>

  );
};

export default Header;
