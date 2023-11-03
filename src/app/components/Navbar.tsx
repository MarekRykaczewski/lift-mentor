import Link from "next/link";
import React from "react";
import SettingsIcon from "../icons/SettingsIcon";
import DashboardIcon from "../icons/DashboardIcon";
import ReportsIcon from "../icons/ReportsIcon";
import GoalsIcon from "../icons/GoalsIcon";
import LogoIcon from "../icons/LogoIcon";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    title: "Reports",
    link: "/reports",
    icon: <ReportsIcon />,
  },
  {
    id: 3,
    title: "Goals",
    link: "/goals",
    icon: <GoalsIcon />,
  },
  {
    id: 4,
    title: "Settings",
    link: "/settings",
    icon: <SettingsIcon />,
  },
];

const Navbar = () => {
  return (
    <div className="flex w-[500px] flex-col gap-4 p-4 md:p-10 bg-white">
      {/* LOGO CONTAINER */}
      <div className="flex items-center justify-center gap-2 uppercase text-center text-2xl md:text-3xl text-indigo-500 font-bold">
        <LogoIcon />
        <span>Lift Mentor</span>
      </div>
      {/* PROFILE CARD CONTAINER */}
      <div className="bg-indigo-50 p-4 rounded-lg text-gray-700">
        <div className="flex justify-around items-center mb-4 text-center">
          <Image
            className="rounded-full"
            src={"/avatar_placeholder.png"}
            alt="Your profile picture"
            width={60}
            height={60}
          />
          <div className="flex flex-col">
            <span className="text-xl text-center font-bold">John Doe</span>
            <span className="text-sm text-indigo-600 text-center">
              Building muscle
            </span>
          </div>
        </div>
        <div className="w-full flex justify-around text-center">
          <div className="flex flex-col">
            <span className="text-sm text-indigo-600">Age</span>
            <span className="font-bold">25</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-indigo-600">Height</span>
            <span className="font-bold">180cm</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-indigo-600">Weight</span>
            <span className="font-bold">75kg</span>
          </div>
        </div>
      </div>
      {/* LINKS CONTAINER */}
      <div className="flex flex-col">
        {data.map((item) => (
          <Link
            className="flex items-center gap-4 py-2 px-4 mb-2 text-base md:text-lg text-gray-700 hover:text-white hover:bg-indigo-500 rounded-md transition duration-300"
            href={item.link}
            key={item.id}
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
