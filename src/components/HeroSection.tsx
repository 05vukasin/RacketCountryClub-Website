import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import { useLanguage } from "../context/LanguageContext";

import img1 from "../assets/images/image-1.jpg";
import img2 from "../assets/images/image-2.jpg";
import img3 from "../assets/images/image-3.jpg";
import img5 from "../assets/images/image-5.jpg";
import img6 from "../assets/images/image-6.jpg";

const images = [img1, img2, img3, img5, img6];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="Hero" id="home">
      {images.map((img, index) => (
        <div
          key={index}
          className={`Hero-bg ${index === currentImage ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="Hero-overlay" />

      <div className="Hero-content">
        <h1 className="Hero-title">Racket Country Club</h1>
        <p className="Hero-subtitle">
          {language === "sr"
            ? "Tradicionalna elegancija i prestiž"
            : "A Tradition of Elegance and Excellence"}
        </p>
        <a href="#membership" className="Hero-button Hero-button--primary">
          {language === "sr" ? "Postani član" : "Join the Club"}
        </a>
      </div>
    </header>
  );
};

export default HeroSection;
