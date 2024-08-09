import React from 'react'
import Homeimg from '../imag/Home.jpg'

function Ebaja() {
  return (
    <div>
         <div className="home-container">
      <div className="overlay"></div>
      <div className="content">
        <h1>About E-Baja...</h1>
        <p>Your tagline goes here</p>
      </div>
      
      <img src={Homeimg} alt="Home background" className="background-img" />
    </div>
    </div>
  )
}

export default Ebaja
