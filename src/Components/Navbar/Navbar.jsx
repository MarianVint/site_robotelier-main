import React, { useEffect } from "react";
import './Navbar.css';
import logo from '../../assets/text_robotelier.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = React.useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className='container'>
      <img src={logo} alt="Robotelier Logo" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-menu'} onClick={toggleMenu}>
        <li><ScrollLink to="hero" smooth={true} duration={500}>Acasă</ScrollLink></li>
        <li><ScrollLink to="announcement-card" smooth={true} duration={500} offset={-250}>Anunțuri</ScrollLink></li>
        <li><ScrollLink to="Trainings" smooth={true} duration={500} offset={-250}>Training-uri</ScrollLink></li>
        <li><ScrollLink to="gallery" smooth={true} duration={500} offset={-259}>Electrocamp</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500} offset={-100}>Despre noi</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500} className="button">Contact</ScrollLink></li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;