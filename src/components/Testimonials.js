import React from 'react'
import "../styles/TestimonialsStyles.css"
import TestimonialsCard from './TestimonialsCards'

const Testimonials = () => {
  return (
    <div className="Testimonials-section-container">
      <div className="Testimonials-section-title">
            <h1>Testimonials</h1>
            <div className="btn-container">
                <button className="btn btn-menu">Online Menu</button>
            </div>
      </div>
      <TestimonialsCard />
    </div>
  )
}

export default Testimonials