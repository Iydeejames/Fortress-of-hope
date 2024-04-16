import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/landingPage/Navbar'

function Authlayout() {
  return (
    <div>
        <Navbar /> 
        {/* <Outlet/> */}
    </div>
  )
}

export default Authlayout
