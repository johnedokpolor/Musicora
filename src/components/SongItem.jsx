import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);
  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] max-w-[180px] cursor-pointer rounded p-2 px-3 hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="" />
      <p className="mb-1 mt-2 truncate font-bold">{name}</p>
      <p className="text-sm text-slate-200">{desc}</p>
    </div>
  );
};

export default SongItem;
