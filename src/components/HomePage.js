import React from 'react';
import '../styles.css';

import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './Testimonials';
import Chicago from './AboutPage';

const HomePage = () => {
  return (
    <div>
    <CallToAction />
    <Specials />
    <CustomersSay />
    <Chicago />
  </div>

  );
};

export default HomePage;
