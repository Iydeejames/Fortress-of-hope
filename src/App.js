import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import BannerSection from './components/Banner';
import VideoSection from './components/Video';
import AboutSection from './components/AboutUs';
import PhotoSection from './components/Photo';
import FindBranch from './components/FindBranch';
import BranchDetails from './components/BranchDetails';
import SalvationSection from './components/Salvation';
import EventSection from './components/Events';
import ConnectSection from './components/Connect';
import PastorsSection from './components/OurPastors'

function App() {
  const [showBranchDetails, setShowBranchDetails] = useState(false);

  const handleShowBranchDetails = () => {
    setShowBranchDetails(true);
  };

  const handleCloseBranchDetails = () => {
    setShowBranchDetails(false);
  };

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <SalvationSection />
      <PhotoSection />
      <FindBranch />
      <BannerSection />
      <PastorsSection />
      <ConnectSection />
      <EventSection />
      {showBranchDetails && <BranchDetails handleCloseBranchDetails={handleCloseBranchDetails} />}
    </div>
  );
}

export default App;
