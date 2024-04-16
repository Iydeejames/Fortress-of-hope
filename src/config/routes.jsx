
import {Routes, Route, Outlet} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Authlayout from '../layouts/authlayout';
import BranchDetails from '../components/landingPage/BranchDetails';



function PageRoutes() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/BranchDetails" element={<BranchDetails />} />
        {/* <Authlayout/> */}
        {/* <Outlet/> */}
      </Routes>
  )
}

export default PageRoutes
