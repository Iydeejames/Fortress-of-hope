import { Routes, Route, Outlet } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import BranchDetails from '../components/landingPage/BranchDetails';
import AboutUs from '../components/landingPage/AboutUs';
import WhatWeDo from '../components/WhatWeDo';
import MediaResources from '../components/MediaResources';
import OnlineGiving from '../components/OnlineGiving';
import ContactPg from '../components/ContactPg';

function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/branchdetails" element={<BranchDetails />} />
            <Route path="/whatwedo" element={<WhatWeDo />} />
            <Route path="/mediaresources" element={<MediaResources />} />
            <Route path="/onlinegiving" element={<OnlineGiving />} />
            <Route path="/contactpg" element={<ContactPg />} />

        {/* <Authlayout/> */}
        {/* <Outlet/> */}
      </Routes>
  )
}

export default PageRoutes
