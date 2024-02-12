import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';



const Nav = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/booking">Booking</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;