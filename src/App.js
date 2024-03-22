import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import HeroSection from './components/Hero';
import BannerSection from './components/Banner';
import VideoSection from './components/Video';
import AboutSection from './components/AboutUs';
import PhotoSection from './components/Photo'
import FindBranch from './components/FindBranch'
import SalvationSection from './components/Salvation'

function App() {
  return (
    <div className="App">
      < Navbar/>
      < HeroSection/>
      < AboutSection/>
      < VideoSection/>
      < SalvationSection />
      < PhotoSection/>
      < FindBranch/>
      < BannerSection/>
    </div>

  );
}

export default App;
