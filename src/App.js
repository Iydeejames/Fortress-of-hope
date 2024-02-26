import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HeroSection from './components/Hero';
import BannerSection from './components/Banner';
import VideoSection from './components/Video'

function App() {
  return (
    <div className="App">
      < Navbar/>
      < HeroSection/>
      < BannerSection/>
      < VideoSection/>
    </div>

  );
}

export default App;
