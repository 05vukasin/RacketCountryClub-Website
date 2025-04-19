import React from 'react';
import './AboutSection.css';
import { useLanguage } from '../context/LanguageContext';
import aboutImage from '../assets/images/image-5.jpg'; // stavi pravu sliku ovde

const AboutSection = () => {
  const { language } = useLanguage();

  return (
    <section className="About" id="about">
      <div className="About-container">
        <div className="About-text">
          <h2 className="About-title">
            {language === 'sr' ? 'O Klubu' : 'About the Club'}
          </h2>
          <p className="About-description">
            {language === 'sr'
              ? 'Racket Country Club je simbol elegancije, tradicije i sportskog duha. Naš klub nudi ekskluzivne sadržaje, besprekornu uslugu i okruženje u kom se vrhunski tenis i sofisticirani ambijent susreću.'
              : 'Racket Country Club is a symbol of elegance, tradition, and athletic excellence. Our club offers exclusive facilities, impeccable service, and an environment where premium tennis meets refined lifestyle.'}
          </p>
        </div>
        <div className="About-image-wrapper">
          <img src={aboutImage} alt="About Racket Club" className="About-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
