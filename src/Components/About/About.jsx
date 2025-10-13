import React, { useState } from 'react';
import './About.css';
import about_img from '../../assets/about_img.jpg';
import play_img from '../../assets/play-icon.png';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='about' id="about">
      <div className='about-left'>
        <div className='image-wrapper'>
          <img src={about_img} alt="About Image" className='about-img' />
          <img
            src={play_img}
            alt="Play Icon"
            className='play-icon'
            onClick={openModal} // Open modal on click
          />
        </div>
      </div>

      <div className='about-right'>
      <h3 className='about-h3'>Despre noi</h3>
        <h2 className='about-h2'>Robotelier este locul unde pasiunea pentru tehnologie prinde viață!</h2>
        <p className='about-p'>
          Suntem o comunitate studențească din cadrul <strong>Facultății de Inginerie Electrică</strong> a <strong>Universității Tehnice din Cluj-Napoca</strong>, unde pasiunea pentru tehnologie, inovație și colaborare se îmbină perfect.
        </p>
        <p className='about-p'>
          În ultimii ani, Robotelier a devenit un punct de atracție pentru numeroși studenți din diverse facultăți ale universității, dar și pentru elevi de liceu pasionați de tehnologie. Clubul oferă un mediu dinamic și colaborativ, în care membrii învață prin practică, își dezvoltă gândirea inovatoare și lucrează la proiecte din multiple domenii inginerești.
        </p>
        <p className='about-p'>
          Clubul funcționează pe două direcții complementare:
        </p>
        <ul className='about-list'>
          <li>
            <strong>Divizia Tehnică (DT)</strong> care, de-a forma ideilor noastre, dezvoltă materiale educaționale, organizează traininguri și oferă suportul necesar pentru ca proiectele noastre să prindă viață;
          </li>
          <li>
            <strong>Divizia Comunicare și Imagine (DCI)</strong> care dă viață poveștii Robotelier, se ocupă de promovarea clubului, de imaginea noastră online și de coordonarea evenimentelor care ne aduc împreună.
          </li>
        </ul>
        <p className='about-p'>
          Împreună, asigurăm ca fiecare activitate a clubului să aibă <strong>impact</strong> și <strong>vizibilitate</strong>.
        </p>
        <p className='about-p'>
          Atmosfera din Robotelier este una deschisă, creativă și plină de voie bună. Încurajăm curiozitatea, ideile îndrăznețe și dorința de a învăța mereu ceva nou. Fiecare membru aduce un plus de energie și contribuie la transformarea ideilor în proiecte reale.
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>X</button>
            <VideoPlayer />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;