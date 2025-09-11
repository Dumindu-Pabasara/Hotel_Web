
import React from 'react';
import Nav_Bar from './Components/Nav Bar/Nav_Bar';
import { Hero } from './Components/Hero/Hero';
import About_Us from './Components/About Us/About_Us';


const App = () => {
  return (
    <div>
      <Nav_Bar />
      <Hero />
      <About_Us />
    </div>
  );
}

export default App