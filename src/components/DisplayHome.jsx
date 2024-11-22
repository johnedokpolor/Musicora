import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import Favourites from "./Favourites";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayHome = () => {
  const { favourites } = useContext(PlayerContext);

  return (
    <div>
      <div className="mb-4">
        {favourites.length > 0 && <Favourites />}

        <h1 className="text-2x l my-5 font-bold">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album, index) => (
            <AlbumItem key={index} {...album} />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 text-2xl font-bold">Top Songs</h1>
        <div className="flex overflow-auto">
          {songsData.map((song, index) => (
            <SongItem key={index} {...song} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
