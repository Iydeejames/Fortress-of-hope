import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HeroSection from './components/Hero';
import BannerSection from './components/Banner';
import VideoSection from './components/Video';
import AboutSection from './components/AboutUs';
import PhotoSection from './components/Photo'
import FindBranch from './components/FindBranch'

function App() {
  return (
    <div className="App">
      < Navbar/>
      < HeroSection/>
      < BannerSection/>
      < VideoSection/>
      < AboutSection/>
      < PhotoSection/>
      < FindBranch/>
    </div>

  );
}

export default App;
