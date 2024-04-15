import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import PastorsSection from './components/OurPastors';
import InviteSection from './components/Invite';
import FooterSection from './components/Footer';
import ContactSection from './components/Contact';
import LandingPage from './components/LandingPage'; // Corrected import

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
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/branch-details" element={<BranchDetails handleCloseBranchDetails={handleCloseBranchDetails} />} />
          <Route path="/*" element={
            <>
              <HeroSection />
              <AboutSection />
              <VideoSection />
              <SalvationSection />
              <PhotoSection />
              <FindBranch />
              <BannerSection />
              <ConnectSection />
              <PastorsSection />
              <EventSection />
              {showBranchDetails && <BranchDetails handleCloseBranchDetails={handleCloseBranchDetails} />}
              <InviteSection />
              <ContactSection />
              <FooterSection />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



{/* import * as React from "react";
import { BrowserRouter as Router, Route, Outlet} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/pages/LandingPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Outlet>
          <Route path="/" element={<LandingPage />} />
        </Outlet>
      </Router>
    </div>
  );
}

export default App;
 */}
