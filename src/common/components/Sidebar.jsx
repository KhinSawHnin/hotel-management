import React from 'react'
import login_form from "../../assets/login_form.png"
import { TbChartHistogram } from "react-icons/tb";
import { BsEnvelopePlus } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
const Sidebar = () => {
  return (
    <div className='bg-regal-pink w-1/6 h-screen font-serif'>
      <div className="flex gap-4 p-4">
        <img src={login_form} alt="" className='w-20 rounded-full' />
        <div className="flex flex-col items-center">
        <h2 className="text-white text-xl">Chan Myae </h2>
          <p className="text-white text-base">Guest House</p>
          </div>
      </div>
      <div className="flex flex-col pl-10 pr-16 py-7 gap-6">
        <Link to="/dashboard" className='inline-flex items-center justify-start pl-3 py-1.5 rounded-lg shadow-lg gap-2 bg-red-700 text-white'><TbChartHistogram className='size-6' /><span className="">Dashboard</span></Link>
        <Link to="/dashboard/bookings" className=' inline-flex items-center justify-start pl-3 py-1.5 rounded-lg shadow-lg gap-2 text-red-700 bg-white'><BsEnvelopePlus className='size-6' /><span className="">Bookings</span></Link>
        <Link to="/dashboard/rooms" className='inline-flex items-center justify-start pl-3 py-1.5 rounded-lg shadow-lg gap-2 text-red-700 bg-white'><MdOutlineBedroomParent className='size-6' /><span className="">Rooms</span></Link>
        <Link to="/dashboard/guests" className='inline-flex items-center justify-start pl-3 py-1.5 rounded-lg shadow-lg gap-2 text-red-700 bg-white'><FaPeopleRoof className='size-6' /><span className="">Guests</span></Link>
        <Link to="/dashboard/finance" className='inline-flex items-center justify-start pl-3 py-1.5 rounded-lg shadow-lg gap-2 text-red-700 bg-white'><TbReportMoney  className='size-6'/><span className="">Finance</span></Link>
      </div>
    </div>
  )
}

export default Sidebar