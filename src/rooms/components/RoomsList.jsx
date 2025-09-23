import React from "react";

const RoomsList = () => {
  const statusColors = {
    available: "bg-[#ABDAA6] text-white",
    booked: "bg-[#8BA6E6] text-white",
    unavailable: "bg-[#E68B9F] text-white",
  };

  const floors = ["4th Floor", "5th Floor", "7th Floor", "8th Floor"];

  const rooms = [
    [" 1 ", "2", "3", "4", "10", "11", "12", "13", "14"],
    ["5", "6", "7", "8", "15", "16", "17", "19"],
    [
      "701",
      "702",
      "703",
      "704",
      "705",
      "706",
      "707",
      "718",
      "715",
      "716",
      "717",
      "719",
      "720",
      "721",
      "722",
      "723",
    ],
    [
      "801",
      "802",
      "803",
      "804",
      "809",
      "810",
      "811",
      "812",
      "813",
      "814",
      "815",
      "816",
      "817",
    ],
  ];

  // Mock statuses: 'available' | 'booked' | 'unavailable'
  const getRoomStatus = (roomId) => {
    if (roomId.endsWith("1") || roomId.endsWith("6")) return "unavailable";
    if (roomId.endsWith("2") || roomId.endsWith("3")) return "booked";
    return "available";
  };
  return (
    <>
      <div className="p-8 w-full  ">
        <h1 className="text-2xl font-medium font-serif hover:text-red-500   "
>
          Room Overview
        </h1>
        <div className=" bg-white shadow-2xl py-5 ">
          {floors.map((floor, index) => (
            <div key={floor} className="flex items-center gap-4">
              <div className="w-24 font-semibold text-right">{floor}</div>
              <div className="grid grid-cols-10 gap-2">
                {rooms[index].map((roomId) => {
                  const status = getRoomStatus(roomId);
                  return (
                    <div
                      key={roomId}
                      className={`w-16 h-12 rounded px-3 py-2 text-center font-medium shadow flex items-center justify-center ${statusColors[status]}`}
                    >
                      {roomId}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RoomsList;
