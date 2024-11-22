import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  function nav() {
    window.location.href = `/album/${id}`;
  }
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/album/${id}`)}>
      <div className="min-w-[180px] cursor-pointer rounded p-2 px-3 hover:bg-[#ffffff26]">
        <img className="rounded" src={image} alt="" />
        <p className="mb-1 mt-2 font-bold">{name}</p>
        <p className="text-sm text-slate-200">{desc}</p>
      </div>
    </div>
  );
};

export default AlbumItem;
