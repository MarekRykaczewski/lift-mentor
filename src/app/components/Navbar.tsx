import Link from "next/link";
import React from "react";

const data = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
  },
  {
    id: 2,
    title: "Reports",
    link: "/reports",
  },
  {
    id: 3,
    title: "Goals",
    link: "/goals",
  },
  {
    id: 4,
    title: "Settings",
    link: "/settings",
  },
];

const Navbar = () => {
  return (
    <div className="flex flex-col p-4 md:p-10 bg-white text-gray-800">
      {/* LOGO CONTAINER */}
      <div className="uppercase text-center text-2xl md:text-3xl text-indigo-500 font-bold mb-4 md:mb-8">
        Logo
      </div>
      {/* LINKS CONTAINER */}
      <div className="flex flex-col">
        {data.map((item) => (
          <Link
            className="py-2 px-4 mb-2 text-base md:text-lg text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100 rounded-md transition duration-300"
            href={item.link}
            key={item.id}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
