import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from "../components/Navbar"
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
const HomePage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex">
       <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default HomePage