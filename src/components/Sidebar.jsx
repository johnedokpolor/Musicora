import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkmodeActions } from "../store/darkModeSlice";
import { GrHomeRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { FaArrowRight, FaPlus } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";

import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  function nav() {
    window.location.href = "/";
  }
  return (
    <div className="hidden h-full w-[25%] flex-col gap-2 p-2 dark:text-white lg:flex">
      <div className="flex h-[15%] flex-col justify-around rounded bg-[whitesmoke] dark:bg-[#121212]">
        <div
          onClick={nav}
          className="flex items-center gap-3 pl-8 lg:cursor-pointer"
        >
          <GrHomeRounded className="h-6 w-6" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 lg:cursor-pointer">
          <FiSearch className="h-6 w-6" />

          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="h-[85%] rounded dark:bg-[#121212]">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <IoLibrary className="h-6 w-6" />

            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <FaArrowRight className="h-6 w-6" />
            <FaPlus className="h-6 w-6" />
          </div>
        </div>
        <div className="m-2 flex flex-col items-start justify-start gap-3 rounded bg-[#242424] p-4 pl-4 font-semibold">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy we will help you</p>
          <button className="mt-2 rounded-full bg-white px-4 py-1.5 text-sm text-black">
            Create Playlist
          </button>
        </div>
        <div className="m-2 flex flex-col items-start justify-start gap-3 rounded bg-[#242424] p-4 pl-4 font-semibold">
          <h1>Let's find podcasts to follow</h1>
          <p className="font-light">We'll keep you updates on new episodes</p>
          <button className="mt-2 rounded-full bg-white px-4 py-1.5 text-sm text-black">
            Browse Podcasts
          </button>
        </div>
        {/* <div
          onClick={toggle}
          className="relative m-2 h-6 w-12 rounded-full bg-black dark:bg-white"
        >
          <div className="absolute m-1 h-4 w-4 rounded-full duration-300 dark:translate-x-6">
            {dark ? (
              <FaMoon className="rounded-full bg-white text-black" />
            ) : (
              <FaSun className="rounded-full bg-black text-white" />
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
