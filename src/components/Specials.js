import React from 'react'
import "../styles.css"
import SpecialsCard from './SpecialsCards'

const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
            <h5>Specials</h5>
            <div className="btn-container">
                <button className="btn btn-menu">Online Menu</button>
            </div>
      </div>
      <SpecialsCard />
    </div>
  )
}

export default Specials