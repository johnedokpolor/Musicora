import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex w-full items-center justify-between font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-7 cursor-pointer rounded-2xl bg-black p-2"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-7 cursor-pointer rounded-2xl bg-black p-2"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex gap-4">
          <p className="hidden rounded-2xl bg-white px-4 py-1 text-[15px] text-black md:block lg:cursor-pointer">
            Explore Premium
          </p>
          <p className="rounded-2xl bg-black px-4 py-1 text-[15px] lg:cursor-pointer">
            Install App
          </p>
          <p className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500 text-black">
            A
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <p className="rounded-2xl bg-white px-4 py-1 text-black">All</p>
        <p className="rounded-2xl bg-black px-4 py-1 lg:cursor-pointer">
          Music
        </p>
        <p className="rounded-2xl bg-black px-4 py-1 lg:cursor-pointer">
          Podcast
        </p>
      </div>
    </div>
  );
};

export default Navbar;
