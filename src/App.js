import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import AboutPage from './components/AboutPage';

import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import BookingPage from './components/BookingPage';

const App = () => {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path= "/contact" element={<ContactPage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;