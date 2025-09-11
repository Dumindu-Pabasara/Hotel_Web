import React from 'react'
import './Nav_Bar.css'
import logo from '../../Assets/logo.png'

const Nav_Bar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Accommodation</li>
            <li>Experiences</li>
            <li>Gallery</li>
            <li>Contact Us</li>
            <li><button className='btn'>Book Now</button></li>
        </ul>
       
    </nav>
  )
}

export default Nav_Bar