import React from 'react'
import HeroSection from '../Hero'
import AboutSection from '../AboutUs'
import SalvationSection from '../Salvation'
import PhotoSection from '../Photo'
import FindBranch from '../FindBranch'
import VideoSection from '../Video'
import BannerSection from '../Banner'
import ConnectSection from '../Connect'
import PastorsSection from '../OurPastors'
import EventSection from '../Events'
import InviteSection from '../Invite'
import ContactSection from '../Contact'
import FooterSection from '../Footer'
import BranchDetails from '../BranchDetails'

export default function LandingPage() {
  return (
    <div>
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
            <BranchDetails/>
            <InviteSection />
            <ContactSection />
            <FooterSection />
    </div>
  )
}
