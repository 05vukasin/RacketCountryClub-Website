import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";
import ukFlag from "../assets/images/uk-flag.png";
import rsFlag from "../assets/images/serbia-flag.png";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const flag = language === "sr" ? ukFlag : rsFlag;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Racket Club Logo" className="navbar-logo" />

        <ul className={`navbar-links ${open ? "open" : ""}`}>
          {[
            { id: "home", labelSr: "Početna", labelEn: "Home", href: "#home" },
            {
              id: "about",
              labelSr: "O Nama",
              labelEn: "About",
              href: "#about",
            },
            {
              id: "membership",
              labelSr: "Članstvo",
              labelEn: "Membership",
              href: "#membership",
            },
            {
              id: "shop",
              labelSr: "Prodavnica",
              labelEn: "Shop",
              href: "/shop",
            },
          ].map(({ id, labelSr, labelEn, href }) => (
            <li key={id}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                {...(href.startsWith("/") ? { target: "_self" } : {})}
              >
                {language === "sr" ? labelSr : labelEn}
              </a>
            </li>
          ))}

          <li>
            <button className="lang-btn" onClick={toggleLanguage}>
              <img src={flag} alt="Language Toggle" className="lang-flag" />
            </button>
          </li>
        </ul>

        <div
          className={`hamburger-icon ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <svg viewBox="0 0 60 40">
            <g
              stroke="#003B2A"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path id="top-line" d="M10,10 L50,10" />
              <path id="middle-line" d="M10,20 L50,20" />
              <path id="bottom-line" d="M10,30 L50,30" />
            </g>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
