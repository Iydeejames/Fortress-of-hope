import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
import InviteSection from './components/Invite';
import FooterSection from './components/Footer';
import ContactSection from './components/Contact';


function App() {
  const [showBranchDetails, setShowBranchDetails] = useState(false);

  const handleShowBranchDetails = () => {
    setShowBranchDetails(true);
  };

  const handleCloseBranchDetails = () => {
    setShowBranchDetails(false);
  };

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route path="/">
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
      <InviteSection/>
      <ContactSection/>
      <FooterSection/>
      </Route>
      <Route path="/branch-details" Component={BranchDetails}/>
    </div>
    </Router>
  );
}

export default App;
