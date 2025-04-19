import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import HomePage from './pages/HomePage';
import ShopPage from './shop/page';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const imagePaths = [
      require('./assets/images/image-1.jpg'),
      require('./assets/images/image-2.jpg'),
      require('./assets/images/image-3.jpg'),
      require('./assets/images/image-5.jpg'),
      require('./assets/images/image-6.jpg'),
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
      setTimeout(() => setLoading(false), 800);
    });
  }, []);

  if (loading) return <Preloader />;

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
