import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from "../components/Navbar"
import Dashboard from '../components/Dashboard'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
const HomePage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default HomePage