import React from 'react';
import Nav_Bar from './Components/Nav Bar/Nav_Bar';
import { Hero } from './Components/Hero/Hero';
import About_Us from './Components/About Us/About_Us';
import Accomodation from './Components/Accomodation/Accomodation';
import { Experiance } from './Components/Experiance/Experiance';
import { Gallery } from './Components/Gallery/Gallery';
import Footer from './Components/Footer/Footer';
import Booking from './Components/Booking/Booking';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Nav_Bar />
      <Routes>
        <Route path="/" element={<Hero /> } />
        <Route path="/about" element={<About_Us />} />
        <Route path="/accommodation" element={<Accomodation />} />
        <Route path="/experiences" element={<Experiance />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <About_Us />
      <Accomodation />
      <Experiance />
      <Gallery />
      <Booking />
      <Footer />
    </Router>
  );
}

export default App;