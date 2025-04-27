import React from 'react';
import './About.css';
import about_img from '../../assets/about_img.jpg';
import play_img from '../../assets/play-icon.png';

const About = () => {
  return (
    <div className='about' id="about">
      <div className='about-left'>
        <div className='image-wrapper'>
          <img src={about_img} alt="About Image" className='about-img' />
          <img src={play_img} alt="Play Icon" className='play-icon' />
        </div>
      </div>

      <div className='about-right'>
        <h3 className='about-h3'>Despre noi</h3>
        <h2 className='about-h2'>Ce este ROBOTELIER?</h2>

        <p className='about-p'>
          Robotelier este o comunitate studențească entuziastă din cadrul U.T.Cluj,  
          unde pasiunea pentru robotică, electronică și programare prinde viață.  
          Prin ateliere practice și traininguri hands‑on,  
          membrii își dezvoltă abilități tehnice și colaborează la proiecte inovatoare.
        </p>

        <p className='about-p'>
          Organizația funcționează pe două direcții complementare:  
          echipa Tehnică, care concepe materiale educaționale și susține workshopuri,  
          și echipa Media, care gestionează promovarea online și coordonează evenimente.  
          Împreună asigurăm vizibilitate și impact pentru toate activitățile noastre.
        </p>

        <p className='about-p'>
          Atmosfera în Robotelier este prietenoasă și orientată spre învățare continuă,  
          încurajând creativitatea și colaborarea.  
          Fiecare membru aduce idei proaspete,  
          iar sprijinul reciproc transformă conceptele în realizări concrete.
        </p>
      </div>
    </div>
  );
};

export default About;