
import React from 'react';
import Nav_Bar from './Components/Nav Bar/Nav_Bar';
import { Hero } from './Components/Hero/Hero';
import About_Us from './Components/About Us/About_Us';
import Accomodation from './Components/Accomodation/Accomodation';
import { Experiance } from './Components/Experiance/Experiance';
import { Gallery } from './Components/Gallery/Gallery';

const App = () => {
  return (
    <div>
      <Nav_Bar />
      <Hero />
      <About_Us />
      <Accomodation />
      <Experiance />
      <Gallery />
    </div>
  );
}

export default App