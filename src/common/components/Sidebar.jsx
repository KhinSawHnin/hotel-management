import React from "react";
import login_form from "../../assets/login_form.png";
import { TbChartHistogram } from "react-icons/tb";
import { BsEnvelopePlus } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  //list
  const link = (path) =>
    `inline-flex items-center justify-start pl-3 py-3 md:py-4 md:px-4  rounded-lg shadow-lg gap-2 transition-colors duration-200  ${
      currentPath === path
        ? "bg-red-700 text-white "
        : "text-red-700 bg-white hover:bg-red-700 hover:text-white focus:bg-red-700 focus:text-white "
    }`;

  return (
    <>
      {/* Overlay for mobile/tablet */}
      {isOpen && (
        <div className="fixed inset-0 z-30 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar width */}
      <div
        className={`
          fixed lg:static  z-30 top-0 left-0 h-screen 
          w-[45%] sm:w-2/5 md:w-2/5 lg:w-[35%] xl:w-1/5
          transform transition-transform duration-300 ease-in-out
          bg-regal-pink font-serif  
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0
        `}
        onClick={onClose}
      >
        <div className="hidden lg:flex items-center gap-4 p-4 md:px-6 md:pt-0 lg:py-7 sm:pt-2 pb-0 3xl:gap-2 lg:pr-4 sm:ml-4 lg:ml-2 3xl:ml-0.5 2xl:ml-0">
          <img
            src={login_form}
            alt="Profile"
            className="w-14 sm:w-16 md:w-20 lg:w-24 3xl:w-24 rounded-full lg:ml-4"
          />
          
          <div className="flex flex-col items-start">
            <h2 className="text-white lg:text-xl md:text-3xl 3xl:text-2xl xl:text-2lg text-lg">
              Chan Myae
            </h2>
            <p className="text-white lg:text-base md:text-xl 3xl:text-xl">
              Guest House
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-col pl-6 pr-6 sm:pl-8 sm:pr-10 pt-6 md:pl-10 md:pr-16 py-7 gap-4 sm:gap-5 md:gap-6   lg:pt-4  sm:pt-4 md:pt-8 ">
          <Link to="/dashboard" className={link("/dashboard")}>
            <TbChartHistogram className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm  md:text-xl lg:text-lg  pr-0.5 ">
              Dashboard
            </span>
          </Link>
          <Link
            to="/dashboard/bookings"
            className={link("/dashboard/bookings")}
          >
            <BsEnvelopePlus className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-xl">Bookings</span>
          </Link>
          <Link to="/dashboard/rooms" className={link("/dashboard/rooms")}>
            <MdOutlineBedroomParent className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-xl">Rooms</span>
          </Link>
          <Link to="/dashboard/guests" className={link("/dashboard/guests")}>
            <FaPeopleRoof className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-xl">Guests</span>
          </Link>
          <Link to="/dashboard/finance" className={link("/dashboard/finance")}>
            <TbReportMoney className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-xl">Finance</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
