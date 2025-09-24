import React, { useState } from "react";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineArrowDropDown,
} from "react-icons/md";
import { Link, useParams } from "react-router-dom";

const RoomDetail = () => {
  const [status, setStatus] = useState("");

  const handleStatusChange = () => {
    if (!status) return;
    alert(`Room status changed to: ${status}`);
  };
  return (
    <>
      <div className="p-4 w-full ">
        <div className="flex items-center gap-2 text-2xl font-medium font-serif mb-6 ">
          <Link
            to="/dashboard/rooms"
            className="text-2xl font-medium font-serif hover:text-red-500 "
          >
            Room Overview
          </Link>
          <MdKeyboardDoubleArrowRight className="text-gray-500 size-6" />
          <span>101</span>
        </div>
        <div className="space-y-4 bg-white shadow-2xl py-5  rounded-lg ">
          {/* Top Info Section */}
          <div className="flex justify-between mb-6">
            {/* Room Properties */}
            <div className="w-1/2 px-6">
              <h2 className="text-base font-serif  text-red-600 border-l-4 border-red-400 pl-2 mb-4">
                Room Properties
              </h2>
              <div>
                <div className="space-y-4">
                  <div className="flex justify-between py-2">
                    <span className="text-gray-700 font-medium">Room Type</span>
                    <span className="text-gray-900">Master Bed Room</span>
                  </div>

                  <div className="flex justify-between py-2">
                    <span className="text-gray-700 font-medium">Price</span>
                    <span className="text-gray-900">90,000 MMK</span>
                  </div>

                  <div className="flex justify-between py-2">
                    <span className="text-gray-700 font-medium">
                      Available Person
                    </span>
                    <span className="text-gray-900">2 nos</span>
                  </div>

                  <div className="flex justify-between py-2">
                    <span className="text-gray-700 font-medium">
                      Current Status
                    </span>
                    <span className="text-red-500 font-medium">Occupied</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Information */}
            <div className="w-1/2 px-6">
              <h2 className="text-base font-serif  text-red-600 border-l-4 border-red-400 pl-2 mb-4">
                Guest Information
              </h2>
               <div>
                <div className="space-y-4">
                  <div className="flex justify-between py-2">
                  <span className="text-gray-700 font-medium">Name</span>
                  <span className="text-gray-900">Tester</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-gray-700 font-medium">
                    Check-in Date
                  </span>
                  <span className="text-gray-900">2025-09-16</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-gray-700 font-medium">
                    Check-out Date
                  </span>
                  <span className="text-gray-900">2025-09-26</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-gray-700 font-medium">
                    no of Guests
                  </span>
                  <span className="text-gray-900">2 nos</span>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="m-6 border-gray-300" />

          {/* Change Room Status */}
         <div className="px-6 pb-3"> 
          <h2 className="text-base font-serif  text-red-600 border-l-4 border-red-400 pl-2 mb-4 ">
                Change Room Status
              </h2></div>
          <div className="flex items-center gap-6 px-6">
            <span className="text-gray-700 font-medium">Choose Status</span>

            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded px-4 py-2 pr-8 text-gray-500 focus:outline-none focus:border-gray-400">
                <option>Select Status</option>
                <option>Available</option>
                <option>Occupied</option>
                <option>Reserved</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <MdOutlineArrowDropDown  className="size-6"/>
              </div>
            </div>
          </div>
          <button
          // disabled={!status}
          className={`w-fit px-6 py-2 text-sm rounded-md text-white font-semibold shadow ml-40 ${
            status
              ? "bg-red-300 cursor-not-allowed"
              : " bg-[#9D5051] opacity-50 hover:bg-red-700 cursor-allowed"
          }`}
        >
          Change
        </button>
        </div>
      </div>
    </>
  );
};

export default RoomDetail;
