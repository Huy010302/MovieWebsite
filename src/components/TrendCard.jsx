import React from 'react'
import '../css/trendcard.css'


function TrendCard( {slide} ) {
  return (
    <div className='trend-card'>
        <img src= {slide.previewImg} className='img-fluid' alt="img" />
        <a href="#">
            Add to calender <ion-icon name="calendar-outline"></ion-icon>
        </a>
    </div>
  )
}

export default TrendCard