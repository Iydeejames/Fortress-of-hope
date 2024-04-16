
import {Routes, Route, Outlet} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Authlayout from '../layouts/authlayout';



function PageRoutes() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Authlayout/> */}
        {/* <Outlet/> */}
      </Routes>
  )
}

export default PageRoutes
