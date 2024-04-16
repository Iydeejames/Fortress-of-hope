
import {Routes, Route, Outlet} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Authlayout from '../layouts/authlayout';
import BranchDetails from '../components/landingPage/BranchDetails';
import AboutUs from '../components/landingPage/AboutUs';
import WhatWeDo from '../components/landingPage/WhatWeDo';
import MediaResources from '../components/landingPage/MediaResources';
import OnlineGiving from '../components/landingPage/OnlineGiving';
import ContactUs from '../components/landingPage/ContactUs';



function PageRoutes() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/BranchDetails" element={<BranchDetails />} />
        <Route path="/AboutUs" element={<AboutUs />} />
<Route path="/whatwedo" element={<WhatWeDo />} />
<Route path="/mediaresources" element={<MediaResources />} />
<Route path="/onlinegiving" element={<OnlineGiving />} />
<Route path="/contactus" element={<ContactUs />} />

        {/* <Authlayout/> */}
        {/* <Outlet/> */}
      </Routes>
  )
}

export default PageRoutes
