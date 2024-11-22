import React, { useRef, useEffect } from "react";
import DisplayHome from "./DisplayHome";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

import Navbar from "./Navbar";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();

  const isAlbum = location.pathname.includes("/album");
  const albumId = location.pathname.slice(-1);
  useEffect(() => {
    if (isAlbum) {
      const bgColor = albumsData[albumId].bgColor;
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = ` #121212`;
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] overflow-auto rounded px-6 pt-4 text-white dark:bg-[#121212] lg:w-[75%]"
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;
