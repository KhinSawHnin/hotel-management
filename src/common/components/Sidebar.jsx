import React from "react";
import login_form from "../../assets/login_form.png";
import { TbChartHistogram } from "react-icons/tb";
import { BsEnvelopePlus } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Dynamic link styling

  const link = (path) =>
    `inline-flex items-center justify-start pl-3 py-1.5 md:py-2.5 3 rounded-lg shadow-lg gap-2 ${
      currentPath === path
        ? "bg-red-700 text-white"
        : "text-red-700 bg-white hover:bg-red-700 hover:text-white focus:bg-red-700 focus:text-white"
    }`;

  return (
    <>
      {/* Overlay (for mobile/tablet) */}
      {isOpen && (
        <div className="fixed inset-0   z-30 lg:hidden" onClick={onClose} />
      )}
      {/* Sidebar */}
      <div
        className={`
    fixed lg:static z-30 top-0 left-0  lg:w-1/6 md:w-2/6 h-screen
    transform transition-transform duration-300 ease-in-out
    bg-regal-pink font-serif
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    lg:translate-x-0
  `}
      >
        {/* Close button on mobile */}
        <div className="flex justify-end p-4 lg:hidden">
          <button
            onClick={onClose}
            className="text-white text-2xl "
          >
            <IoClose className="md:size-8 focus:text-red-500"/>
          </button>
        </div>
        {/* <div className='bg-regal-pink w-1/6 h-screen font-serif'> */}
        {/* Mobile/Tablet Topbar */} 
        <div className="flex gap-4 p-4 md:px-6">
          <img src={login_form} alt="" className="w-20 rounded-full" />
          <div className="flex flex-col items-center">
            <h2 className="text-white text-xl md:2xl">Chan Myae </h2>
            <p className="text-white text-base md:text-lg">Guest House</p>
          </div>
        </div>
        <div className="flex flex-col pl-10 pr-16 py-7 gap-6">
          <Link to="/dashboard" className={link("/dashboard")}>
            <TbChartHistogram className="size-6" />
            <span className="">Dashboard</span>
          </Link>
          <Link
            to="/dashboard/bookings"
            className={link("/dashboard/bookings")}
          >
            <BsEnvelopePlus className="size-6" />
            <span className="">Bookings</span>
          </Link>
          <Link to="/dashboard/rooms" className={link("/dashboard/rooms")}>
            <MdOutlineBedroomParent className="size-6" />
            <span className="">Rooms</span>
          </Link>
          <Link to="/dashboard/guests" className={link("/dashboard/guests")}>
            <FaPeopleRoof className="size-6" />
            <span className="">Guests</span>
          </Link>
          <Link to="/dashboard/finance" className={link("/dashboard/finance")}>
            <TbReportMoney className="size-6" />
            <span className="">Finance</span>
          </Link>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Sidebar;
