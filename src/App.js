import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HeroSection from './components/Hero';
import BannerSection from './components/Banner';

function App() {
  return (
    <div className="App">
      < Navbar/>
      < HeroSection/>
      < BannerSection/>
    </div>

  );
}

export default App;
