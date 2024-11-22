import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <div className="flex h-[10%] items-center justify-around px-4 text-white dark:bg-black lg:hidden">
      <Link to={"/"} className="flex flex-col items-center">
        <img className="w-6" src={assets.home_icon} alt="" />
        <p className="text-[11px]">Home</p>
      </Link>
      <div className="flex flex-col items-center">
        <img className="w-6" src={assets.search_icon} alt="" />
        <p className="text-[11px]">Search</p>
      </div>
      <div className="flex flex-col items-center">
        <img className="w-6" src={assets.stack_icon} alt="" />
        <p className="text-[11px]">Library</p>
      </div>
    </div>
  );
};

export default BottomNav;
