import React from 'react'
import './Booking.css'
import '../../Assets/main1.jpg'

const Booking = () => {
  return (
    <div className='booking-section container'>
        
        <div className="booking-caption">
            <h3 >Booking</h3>
            <h2>Online Booking From Mail</h2>
            <p>Welcome to The Epitome, Kurunegala your five-star haven in the heart of the city.</p>
            <p>Enjoy a luxurious and convenient stay with us, whether you're here for business 
                or leisure. Experience the best of Kurunegala with us</p>
            <button className="booking-btn">Read More</button>
        </div>
        <div className="booking-details">
        <h1 className="booking-title">Book Now</h1>
        <form className="booking-form">
            <div className="booking-row">
            <input type="text" placeholder="Your Name" className="booking-input" />
            <input type="email" placeholder="Your Email" className="booking-input" />
            </div>
            <div className="booking-row">
            <input type="text" placeholder="Date & Time From" className="booking-input" />
            <input type="text" placeholder="Date & Time To" className="booking-input" />
            </div>
            <div className="booking-row">
            <select className="booking-input">
                <option>Single</option>
                <option>Double</option>
                <option>Suite</option>
            </select>
            <select className="booking-input">
                <option>Full Board</option>
                <option>Half Board</option>
                <option>Bed & Breakfast</option>
            </select>
            </div>
            <div className="booking-row">
            <select className="booking-input">
                <option>Sri Lanka (+94)</option>
                <option>India (+91)</option>
                <option>UK (+44)</option>
            </select>
            <input type="text" placeholder="Number Ex: 777-777-777" className="booking-input" />
            </div>
            <div className="booking-row">
            <textarea placeholder="Special Request" className="booking-input booking-textarea" rows={3}></textarea>
            </div>
            <button type="submit" className="booking-btn">Mail Now</button>
        </form>
        </div>
    </div>
  )
}

export default Booking