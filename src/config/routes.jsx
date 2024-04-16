import { Routes, Route, Outlet } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import BranchDetails from '../components/landingPage/BranchDetails';
import AboutUs from '../components/landingPage/AboutUs';
import WhatWeDo from '../components/WhatWeDo';
import MediaResources from '../components/MediaResources';
import OnlineGiving from '../components/OnlineGiving';
import Contact from '../components/landingPage/Contact';

function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/branchdetails" element={<BranchDetails />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/whatwedo" element={<WhatWeDo />} />
            <Route path="/mediaresources" element={<MediaResources />} />
            <Route path="/onlinegiving" element={<OnlineGiving />} />
            <Route path="/contact" element={<Contact />} />

        {/* <Authlayout/> */}
        {/* <Outlet/> */}
      </Routes>
  )
}

export default PageRoutes
