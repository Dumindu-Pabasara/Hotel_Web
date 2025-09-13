import React from 'react'
import './Accomodation.css'
import hcard2 from '../../Assets/hcard2.jpg'


const Accomodation = () => {
  return (
    <div className="accomodation-card ">
      <div className="accomodation-image">
        <img src={hcard2} alt="One-Bedroom Villa" />
      </div>
      <div className="accomodation-content container">
        <h2>One-Bedroom Villa</h2>
        <p>
          Ideal for couples or solo travelers, this cozy villa offers a peaceful stay with a private terrace and modern kitchen.
        </p>
        <p><strong>Amenities:</strong> Queen-size bed, Free Wi-Fi, Air conditioning, BBQ, Pool view, and more.</p>
        <div className="accomodation-details">
          <span>🛏️ 17 m²</span>
          <span>👥 2 Guests</span>
          <span>🛏️ Double bed</span>
        </div>
        <button className="explore-btn">Explore Villa</button>
      </div>
    </div>
  );
}

export default Accomodation