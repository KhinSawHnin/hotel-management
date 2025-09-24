import React from 'react'
import { FaBars } from 'react-icons/fa6';
import { IoLogOutOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
const Navbar = ({ onMenuClick }) => {
  const today= new Date();
  return (
    <div className='bg-white font-serif top-0 sticky p-5 border-b border-b-regal-pink shadow-regal-pink shadow-lg'>
        {/* Mobile menu icon */}
    
        <button
        className="lg:hidden text-red-700 text-2xl md:pl-4"
        onClick={onMenuClick}
      >
        <FaBars className='md:size-7' />
      </button>
      <div className="flex justify-between px-3 ">
        <h2 className="text-lg text-red-600">{today.toISOString().split("T")[0]}</h2>
        <div className="flex gap-6">
          <div className="flex flex-col items-center text-red-600">
            <IoPersonOutline className='size-6'/>
            <span className="text-xs">khinsawhnin@gmail.com</span>
          </div>
          <div className="flex flex-col items-center text-red-600">
            <IoLogOutOutline className='size-6'/>
            <span className="text-xs">Logout</span>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Navbar