import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MembershipSection from './components/MembershipSection';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Učitaj sve slike iz HeroSection
    const imagePaths = [
      require('./assets/images/image-1.jpg'),
      require('./assets/images/image-2.jpg'),
      require('./assets/images/image-3.jpg'),
      require('./assets/images/image-5.jpg'),
      require('./assets/images/image-6.jpg')
    ];

    const preloadImages = imagePaths.map(
      src =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
        })
    );

    Promise.all(preloadImages).then(() => {
      setTimeout(() => setLoading(false), 800); // mala pauza radi efekta
    });
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="App">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <MembershipSection />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
