import React from 'react';
import { Link } from 'react-router-dom';
import './Nav_Bar.css';
import logo from '../../Assets/logo.png';

const Nav_Bar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt='' className='logo' />
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About Us</Link></li>
        <li><Link to='/accommodation'>Accommodation</Link></li>
        <li><Link to='/experiences'>Experiences</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
        <li><Link to='/booking'>Book Now</Link></li>
      </ul>
    </nav>
  );
}

export default Nav_Bar;