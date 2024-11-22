import React from "react";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import SongItem from "./SongItem";
import Navbar from "./Navbar";

const Favourites = () => {
  const { favourites } = useContext(PlayerContext);
  return (
    <div>
      <div className="mb-4">
        <h1 className="my-5 text-2xl font-bold">Favourites</h1>
        <div className="flex overflow-auto">
          {favourites.map((song, index) => (
            <SongItem key={index} {...song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
