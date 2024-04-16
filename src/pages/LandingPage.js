import React from 'react'
import HeroSection from '../components/landingPage/Navbar'
import NavbarSection from '../components/landingPage/Hero'
import AboutSection from '../components/landingPage/AboutUs'
import SalvationSection from '../components/landingPage/Salvation'
import PhotoSection from '../components/landingPage/Photo'
import FindBranch from '../components/landingPage/FindBranch'
import VideoSection from '../components/landingPage/Video'
import BannerSection from '../components/landingPage/Banner'
import ConnectSection from '../components/landingPage/Connect'
import PastorsSection from '../components/landingPage/OurPastors'
import EventSection from '../components/landingPage/Events'
import InviteSection from '../components/landingPage/Invite'
import ContactSection from '../components/landingPage/Contact'
import FooterSection from '../components/landingPage/Footer'


export default function LandingPage() {
  return (
    <div>
             <NavbarSection />
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
            <InviteSection />
            <ContactSection />
            <FooterSection />
    </div>
  );
};
