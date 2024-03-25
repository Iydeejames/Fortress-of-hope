// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/Hero';
import BannerSection from './components/Banner';
import VideoSection from './components/Video';
import AboutSection from './components/AboutUs';
import PhotoSection from './components/Photo';
import FindBranch from './components/FindBranch';
import SalvationSection from './components/Salvation';
import EventSection from './components/Events';
import BranchDetails from './components/BranchDetails'; // Import BranchDetails component

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HeroSection} />
          <Route path="/about" component={AboutSection} />
          <Route path="/video" component={VideoSection} />
          <Route path="/salvation" component={SalvationSection} />
          <Route path="/photo" component={PhotoSection} />
          <Route path="/find-branch" component={FindBranch} />
          <Route path="/banner" component={BannerSection} />
          <Route path="/events" component={EventSection} />
          <Route path="/branch-details" component={BranchDetails} /> {/* Add this route */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
