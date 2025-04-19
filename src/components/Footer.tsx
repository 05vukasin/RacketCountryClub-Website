import React from 'react';
import './Footer.css';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/images/logo-white.png';
import { FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="CustomFooter">
      <div className="CustomFooter-content">
        <div className="Footer-column">
          <img src={logo} alt="Racket Club Logo" className="Footer-logo" />
        </div>

        <div className="Footer-column">
          <nav>
            <a href="#home">{language === 'sr' ? 'Početna' : 'Home'}</a>
            <a href="#about">{language === 'sr' ? 'O Nama' : 'About'}</a>
            <a href="#membership">{language === 'sr' ? 'Članstvo' : 'Membership'}</a>
            <a href="#contact">{language === 'sr' ? 'Kontakt' : 'Contact'}</a>
          </nav>
        </div>

        <div className="Footer-column Footer-icons">
          <a href="mailto:racketcountryclub.podrska@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope /> racketcountryclub.podrska@gmail.com
          </a>
          <a href="https://www.instagram.com/racketcountryclub" target="_blank" rel="noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://www.tiktok.com/@racketcountryclub" target="_blank" rel="noreferrer">
            <FaTiktok /> TikTok
          </a>
        </div>
      </div>

      <div className="CustomFooter-bottom">
        <p>© {new Date().getFullYear()} Racket Country Club</p>
      </div>
    </footer>
  );
};

export default Footer;
