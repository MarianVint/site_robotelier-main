import React, { useRef, useState } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next-icon.png';
import prev_icon from '../../assets/back-icon.png';
import testimonial_1 from '../../assets/testimonial_1.jpg';
import testimonial_2 from '../../assets/testimonial_2.jpg';
import testimonial_3 from '../../assets/testimonial_3.jpg';
import testimonial_4 from '../../assets/testimonial_4.jpg';

const Testimonials = () => {
  const slider = useRef();
  const [translateX, setTranslateX] = useState(0); // Track the current position
  const [canSlideNext, setCanSlideNext] = useState(true); // Control next button visibility
  const [canSlidePrev, setCanSlidePrev] = useState(false); // Control prev button visibility

  const slideForward = () => {
    if (window.innerWidth <= 670) {
      if (translateX > -75) {
        const newTranslateX = translateX - 25;
        setTranslateX(newTranslateX);
        slider.current.style.transform = `translateX(${newTranslateX}%)`;
        setCanSlidePrev(true); // Enable the prev button
        if (newTranslateX <= -75) setCanSlideNext(false); // Disable the next button if at the end
      }
    } else {
      if (translateX > -50) {
        const newTranslateX = translateX - 25;
        setTranslateX(newTranslateX);
        slider.current.style.transform = `translateX(${newTranslateX}%)`;
        setCanSlidePrev(true); // Enable the prev button
        if (newTranslateX <= -50) setCanSlideNext(false); // Disable the next button if at the end
      }
    }
  };

  const slideBackward = () => {
    if (window.innerWidth <= 670) {
      if (translateX < 0) {
        const newTranslateX = translateX + 25;
        setTranslateX(newTranslateX);
        slider.current.style.transform = `translateX(${newTranslateX}%)`;
        setCanSlideNext(true); // Enable the next button
        if (newTranslateX >= 0) setCanSlidePrev(false); // Disable the prev button if at the start
      }
    } else {
      if (translateX < 0) {
        const newTranslateX = translateX + 25;
        setTranslateX(newTranslateX);
        slider.current.style.transform = `translateX(${newTranslateX}%)`;
        setCanSlideNext(true); // Enable the next button
        if (newTranslateX >= 0) setCanSlidePrev(false); // Disable the prev button if at the start
      }
    }
  };

  return (
    <div className='Testimonials'>
      {canSlideNext && (
        <img src={next_icon} alt='' className='next' onClick={slideForward} />
      )}
      {canSlidePrev && (
        <img src={prev_icon} alt='' className='prev' onClick={slideBackward} />
      )}
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={testimonial_1} alt="" />
                <div>
                  <h3>Alexandra</h3>
                  <span>Master an II</span>
                </div>
              </div>
              <p>„Robotelier a fost locul unde am prins încredere în abilitățile mele tehnice.
                Nu știam nimic despre Arduino la început, dar cu ajutorul trainingurilor și al colegilor,
                am ajuns să lucrez la propriile proiecte.
                E genul de mediu în care greșelile sunt pași naturali spre progres.”</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={testimonial_2} alt="" />
                <div>
                  <h3>Melisa</h3>
                  <span>Master an II</span>
                </div>
              </div>
              <p>„Pentru mine, Robotelier înseamnă prietenie, provocări și creștere personală.
                Am învățat să lucrez în echipă, să gândesc creativ și să-mi susțin ideile în fața altora.
                Nu e doar un club tehnic – e o mică familie unde fiecare își găsește locul.”

              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={testimonial_3} alt="" />
                <div>
                  <h3>Alexis</h3>
                  <span>Master an I</span>
                </div>
              </div>
              <p>„Când m-am alăturat echipei Media, nu aveam experiență în promovare sau organizare de evenimente.
                Dar am învățat din mers, iar acum mă simt mult mai încrezător în abilitățile mele.
                Robotelier mi-a oferit un context real în care să cresc profesional.”</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={testimonial_4} alt="" />
                <div>
                  <h3>Radu</h3>
                  <span>Robotelier Alumni</span>
                </div>
              </div>
              <p>„Ce mi-a plăcut cel mai mult la Robotelier e faptul că aici e OK să nu știi –
                important e să fii curios. Am fost mereu înconjurat de oameni răbdători și pasionați,
                care m-au inspirat să învăț mai mult și să dau și eu mai departe ce am acumulat.”</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;