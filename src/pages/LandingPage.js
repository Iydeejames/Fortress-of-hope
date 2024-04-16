import React from 'react';
import HeroSection from './Hero';
import AboutSection from './AboutUs';
import SalvationSection from './Salvation';
import PhotoSection from './Photo';
import FindBranch from './FindBranch'; // Import FindBranch component
import VideoSection from './Video';
import BannerSection from './Banner';
import ConnectSection from './Connect';
import PastorsSection from './OurPastors';
import EventSection from './Events';
import InviteSection from './Invite';
import ContactSection from './Contact';
import FooterSection from './Footer';

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <SalvationSection />
      <PhotoSection />
      <FindBranch /> {/* Include FindBranch component here */}
      <BannerSection />
      <ConnectSection />
      <PastorsSection />
      <EventSection />
      <InviteSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
