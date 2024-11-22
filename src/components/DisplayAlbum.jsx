import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData, albumSongs } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";
// import { albumSongs } from "../assests/assests";

const DisplayAlbum = () => {
  const { playWithId } = useContext(PlayerContext);
  const { id } = useParams();
  const albumData = albumsData[id];
  const available = albumSongs[id] ? albumSongs[id] : songsData;

  return (
    <div>
      {/* <Navbar /> */}
      <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="mb-4 text-5xl font-bold md:text-7xl">
            {albumData.name}
          </h2>

          {/* <h4>{albumData.desc}</h4> */}
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />{" "}
            <b>Musicora</b> &bull; 1,234,577 likes &bull; <b>50 songs,</b> about
            2 hr 30 min
          </p>
        </div>
      </div>
      <div className="mb-4 mt-10 flex items-center justify-between pl-2 text-[#a7a7a7] sm:grid sm:grid-cols-4">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p className="hidden sm:block">Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {available.map((song, index) => (
        <div
          onClick={() => playWithId(song.id)}
          key={index}
          className="flex items-center justify-between gap-2 p-2 text-[#a7a7a7] hover:bg-[#ffffff2b] sm:grid sm:grid-cols-4 lg:grid lg:cursor-pointer"
        >
          <div className="flex gap-2 text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img src={song.image} alt="" className="mr-5 inline w-10" />
            <p className="truncate">{song.name}</p>
          </div>
          <p className="hidden text-base sm:block">{albumData.name}</p>
          <p className="hidden text-base sm:block">5 days ago</p>
          <p className="text-base">{song.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayAlbum;
