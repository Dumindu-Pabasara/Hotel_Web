import React from 'react'
import './Gallery.css'
import hcard1 from '../../Assets/hcard1.jpg'
import room from '../../Assets/room.jpg'
import image11 from '../../Assets/image11.jpg'

export const Gallery = () => {
  return (
    

      <div className='gallery container'>
          <div className="photo">
              <img src={hcard1} alt="Hotel Card 1" />
          </div>
          <div className="photo">
              <img src={room} alt="Room" />
          </div>
          <div className="photo">
              <img src={image11} alt="Image 11" />
          </div>

          
          
          
      </div>

  )
}