import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import BannerSection from './components/Banner';
import VideoSection from './components/Video';
import AboutSection from './components/AboutUs';
import PhotoSection from './components/Photo';
import FindBranch from './components/FindBranch';
import BranchDetails from './components/BranchDetails'; // Import BranchDetails component
import SalvationSection from './components/Salvation';
import EventSection from './components/Events';

function App() {
  const [currentPage, setCurrentPage] = useState('FindBranch'); // Add state for current page

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  // Render different components based on the current page state
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <SalvationSection />
      <PhotoSection />
      {currentPage === 'FindBranch' && <FindBranch navigateTo={navigateTo} />}
      {currentPage === 'BranchDetails' && <BranchDetails navigateTo={navigateTo} />}
      <BannerSection />
      <EventSection />
    </div>
  );
}

export default App;
