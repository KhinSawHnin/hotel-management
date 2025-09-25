import React from "react";
import { FaBars } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { formatCreatedAt } from "../../utils/date";
import login_form from "../../assets/login_form.png";
const Navbar = ({ onMenuClick }) => {
  return (
    <div className="bg-white font-serif top-0 sticky p-4 border-b border-b-regal-pink shadow-regal-pink shadow-lg ">
      {/* Mobile menu icon */}
      <div className="flex items-center justify-between flex-wrap gap-4 bg-regal-pink font-serif">
        <button
          className="lg:hidden text-red-700 text-2xl md:pl-4"
          onClick={onMenuClick}
        >
          <FaBars className="md:size-7" />
        </button>
        <div className="flex items-center gap-4 p-4 md:px-6 md:pt-0 pt-0 lg:pt-8 sm:pt-2 pb-0  3xl:gap-2 3xl:mr-4 sm:ml-4 3xl:hidden 2xl:hidden lg:hidden ">
          <img
            src={login_form}
            alt="Profile"
            className="w-16 sm:w-14 md:w-20 lg:w-20 3xl:w-24 rounded-full"
          />
          <div className="flex flex-col items-start">
            <h2 className="text-red-600 lg:text-xl text:xl md:text-3xl 3xl:text-2xl text-lg  bg-black sm:bg-green-200 md:bg-yellow-500 lg:bg-blue-500 xl:bg-pink-900 2xl:bg-orange-500 3xl:bg-red-300">
              Chan Myae
            </h2>
            <p className="text-red-600 lg:text-base md:text-xl 3xl:text-xl text:md">
              Guest House
            </p>
          </div>
        </div>
        </div>
        <div className="flex justify-between px-3 ">
        <h2 className="text-lg text-red-600 ">
          {formatCreatedAt(Date.now())}
        </h2>
        <div className="flex gap-6">
          <div className="flex flex-col items-center text-red-600">
            <IoPersonOutline className="size-6" />
            <span className="text-xs">khinsawhnin@gmail.com</span>
          </div>
          <div className="flex flex-col items-center text-red-600">
            <IoLogOutOutline className="size-6" />
            <span className="text-xs">Logout</span>
          </div>
        </div>
      </div>
     </div>
    // </div>
  );
};

export default Navbar;
