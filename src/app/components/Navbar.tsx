import Link from "next/link";
import DashboardIcon from "../icons/DashboardIcon";
import ReportsIcon from "../icons/ReportsIcon";
import SettingsIcon from "../icons/SettingsIcon";
import WorkoutsIcon from "../icons/WorkoutsIcon";
import ProfileCard from "./ProfileCard";

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
    title: "Workouts",
    link: "/workouts",
    icon: <WorkoutsIcon />,
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
    <div className="flex w-[500px] flex-col gap-4 p-4 md:p-10 border-r-2 border-gray-600 bg-mainDark">
      {/* LOGO CONTAINER */}
      <div className="flex items-center justify-center gap-2 text-center text-2xl md:text-3xl text-white font-bold">
        <span>lift mentor</span>
      </div>
      <ProfileCard />
      <div className="border-t border-2 border-gray-600 my-2"></div>
      {/* LINKS CONTAINER */}
      <div className="flex flex-col h-full">
        {data.map((item) => (
          <Link
            className={`flex items-center gap-4 py-2 px-4 mb-2 font-bold text-base md:text-lg text-white hover:text-indigo-400 rounded-md transition duration-300 ${
              item.title === "Settings" && "mt-auto"
            }`}
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
