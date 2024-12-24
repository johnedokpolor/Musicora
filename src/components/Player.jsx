import React from "react";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useSelector } from "react-redux";
import {
  FaHeart,
  FaRegHeart,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
} from "react-icons/fa";
import { useState } from "react";
import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";
import { useEffect } from "react";

const Player = () => {
  const track = useSelector((state) => state.track.track);
  const mute = useSelector((state) => state.mute.mute);
  const [isFavourite, setIsFavourite] = useState(false);

  const {
    time,
    seekBg,
    seekBar,
    playStatus,
    play,
    pause,
    prev,
    next,
    seekSong,
    volumeRef,
    volume,
    favourites,
    setFavourites,
    muteSong,
  } = useContext(PlayerContext);

  useEffect(() => {
    let favouriteIndex = favourites.findIndex(
      (index) => index.name === track.name,
    );
    if (favouriteIndex < 0) {
      console.log("not favourite");
      setIsFavourite(false);
    } else {
      console.log("is favourite");
      setIsFavourite(true);
    }
  }, [track]);

  const addToFavourites = () => {
    let favouriteIndex = favourites.findIndex(
      (index) => index.name === track.name,
    );
    setIsFavourite((prev) => !prev);
    console.log(favouriteIndex);
    if (favouriteIndex >= 0) {
      setFavourites((prev) => prev.filter((prev) => prev.name !== track.name));
    } else if (favouriteIndex < 0) {
      setFavourites((prev) => [
        ...prev,
        {
          id: track.id,
          name: track.name,
          image: track.image,
        },
      ]);
    }
  };
  console.log(favourites);
  console.log(mute);
  return (
    <div className="flex h-[10%] w-full items-center justify-between px-4 text-white dark:bg-black lg:px-4">
      <div className="flex items-center gap-4">
        <img
          className={playStatus ? "play" : `w-12 rounded-full`}
          src={track.image}
          alt={track.name}
        />
        <div>
          <marquee scrollamount="5" className="w-full lg:w-60">
            <p>{track.name}</p>
          </marquee>

          <p className="w-32 truncate text-sm lg:w-auto">{track.desc}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="flex gap-4">
          <p
            className="text-[18px] sm:text-base lg:text-[16px]"
            onClick={addToFavourites}
          >
            {isFavourite ? (
              <FaHeart className="text-red-600" />
            ) : (
              <FaRegHeart />
            )}
          </p>

          <IoPlaySkipBackSharp
            className="hidden cursor-pointer text-[16px] lg:block"
            onClick={() => prev(track.id)}
          />
          {playStatus ? (
            <FaPause
              onClick={pause}
              className="cursor-pointer text-[18px] lg:text-[16px]"
            />
          ) : (
            <FaPlay
              onClick={play}
              className="cursor-pointer text-[18px] lg:text-[16px]"
            />
          )}
          <IoPlaySkipForwardSharp
            className="cursor-pointer text-[18px] lg:block lg:text-[16px]"
            onClick={() => next(track.id)}
          />
        </div>
        <div className="relative flex items-center gap-5">
          <p className="hidden lg:block">
            {time.currentTime.minutes}:
            {`${time.currentTime.seconds}`.length === 1 ? "0" : ""}
            {time.currentTime.seconds}
          </p>
          <div
            onClick={(e) => seekSong(e)}
            ref={seekBg}
            className="my-2 w-full max-w-[500px] cursor-pointer rounded-full bg-gray-900 lg:block lg:w-[60vw]"
          >
            <hr
              ref={seekBar}
              className="h-1 w-0 rounded-full border-0 bg-green-800"
            />
          </div>
          <div className="hidden lg:block">
            {time.totalTime.minutes ? (
              <p className="">
                {time.totalTime.minutes}:{time.totalTime.seconds}
              </p>
            ) : (
              <p>0:00</p>
            )}
          </div>
        </div>
      </div>
      <div className="hidden items-center gap-2 opacity-75 lg:flex">
        {mute ? (
          <FaVolumeMute onClick={muteSong} className="w-4 cursor-pointer" />
        ) : (
          <FaVolumeUp onClick={muteSong} className="w-4 cursor-pointer" />
        )}
        <input
          onClick={volume}
          ref={volumeRef}
          className="volume h-1 w-20 cursor-pointer rounded-full"
          type="range"
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default Player;
