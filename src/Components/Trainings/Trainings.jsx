import React from 'react'
import './Trainings.css'
import incepatori from '../../assets/incepatori.png'
import avansati from '../../assets/avansati.png'
import Electrocamp from '../../assets/electrocamp.png'
import led from '../../assets/led.png'
import bot from '../../assets/bot.png'
import arm from '../../assets/robo_arm.png'


function Trainings() {
  return (
    <div className='Trainings' id="Trainings"> 
        <div className="training_img"> 
          <a href="https://drive.google.com/drive/folders/1jPjfF-8CAxuZ2ef8Fz5lJ4ut4Fi9d0FX?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img src={incepatori} alt="" />
            <div className="caption">
                <img src={led} alt="" />
                <p>Training pentru începători.</p>
            </div>
          </a>
        </div>
        <div className="training_img">
          <a href="https://drive.google.com/drive/folders/1loQcfZ871Xm4WPligOJtYoaJIZfUSvNj?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img src={avansati} alt="" />
            <div className="caption">
                <img src={bot} alt="" />
                <p>Training pentru avansați.</p>
            </div>
          </a>
        </div>
        <div className="training_img">
          <a href="https://drive.google.com/drive/folders/1UkEeMGkAqqLn-ZNMWO_tBc91ytcTKEG7?usp=sharing" target="_blank" rel="noopener noreferrer">
            <img src={Electrocamp} alt="" />
            <div className="caption">
                <img src={arm} alt="" />
                <p>Cursuri pentru ElectroCamp.</p>
            </div>
          </a>
        </div>
    </div>
  )
}

export default Trainings