import React from "react";
import { Link } from "react-router-dom";
import { IoLibrary } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";

const BottomNav = () => {
  return (
    <div className="flex h-[10%] items-center justify-around px-4 text-white dark:bg-black lg:hidden">
      <Link to={"/"} className="flex flex-col items-center">
        <GrHomeRounded className="h-6 w-6" />

        <p className="text-[11px]">Home</p>
      </Link>
      <div className="flex flex-col items-center">
        <FiSearch className="h-6 w-6" />

        <p className="text-[11px]">Search</p>
      </div>
      <div className="flex flex-col items-center">
        <IoLibrary className="h-6 w-6" />

        <p className="text-[11px]">Library</p>
      </div>
    </div>
  );
};

export default BottomNav;
