import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HeroSection from './components/Hero';
import BannerSection from './components/Banner';
import VideoSection from './components/Video'
import AboutSection from './components/AboutUs'

function App() {
  return (
    <div className="App">
      < Navbar/>
      < HeroSection/>
      < BannerSection/>
      < VideoSection/>
      < AboutSection/>
    </div>

  );
}

export default App;
