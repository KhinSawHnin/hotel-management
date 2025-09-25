import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from "../components/Navbar"
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import { useResponsive } from '../hooks/useResponsive'
const HomePage = () => {
  
   const {sidebarOpen,
    phoneToggleMenu,
    closeMenuIcon}=useResponsive();
  return (
    <div className="flex">
       <Sidebar isOpen={sidebarOpen} onClose={closeMenuIcon} />
      <div className="flex-1">
        <Navbar onMenuClick={phoneToggleMenu} />
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default HomePage