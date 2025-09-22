import React from 'react'
import Siderbar from '../components/Siderbar'
import Navbar from "../components/Navbar"
import Dashboard from '../components/Dashboard'
const HomePage = () => {
  return (
    <div>
        <Siderbar/>
        <Navbar/>
        <Dashboard/>
    </div>
  )
}

export default HomePage