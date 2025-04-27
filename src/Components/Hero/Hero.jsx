import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>   
      <div className="hero-text">
        <h1>Robotelier</h1>
        <p>Ingineria poate să FIE distractivă</p>
        <a href="https://ie.utcluj.ro/files/Acasa/Site/Anunturi/2022-2023/NEWSLETTER%20ROBOTELIER.pdf"> <button className='button'>Află mai mult<img src={dark_arrow} alt=""/> </button> </a>
      </div>
    </div>
  )
}

export default Hero
