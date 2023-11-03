import Link from "next/link";
import React from "react";
import SettingsIcon from "../icons/SettingsIcon";
import DashboardIcon from "../icons/DashboardIcon";
import ReportsIcon from "../icons/ReportsIcon";
import GoalsIcon from "../icons/GoalsIcon";
import LogoIcon from "../icons/LogoIcon";

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
    <div className="flex w-[500px] flex-col p-4 md:p-10 bg-white">
      {/* LOGO CONTAINER */}
      <div className="flex items-center justify-center gap-2 uppercase text-center text-2xl md:text-3xl text-indigo-500 font-bold mb-4 md:mb-8">
        <LogoIcon />
        <span>Lift Mentor</span>
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
