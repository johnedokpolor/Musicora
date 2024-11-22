import React from "react";
import { assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const Player = () => {
  const track = useSelector((state) => state.track.track);
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

  return (
    <div className="flex h-[10%] w-full items-center justify-between px-4 text-white dark:bg-black lg:px-4">
      <div className="flex items-center gap-4">
        <img
          className={playStatus ? "play" : `w-12 rounded-full`}
          src={track.image}
          alt={track.name}
        />
        <div>
          <marquee scrollamount="5" className="w-auto lg:w-60">
            <p>{track.name}</p>
          </marquee>

          <p className="w-32 truncate text-sm lg:w-auto">{track.desc}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="flex gap-4">
          <img
            className="hidden w-4 cursor-pointer lg:block"
            src={assets.shuffle_icon}
            alt=""
          />
          <p className="text-xl sm:text-base" onClick={addToFavourites}>
            {isFavourite ? <FaHeart /> : <FaRegHeart />}
          </p>
          <img
            onClick={() => prev(track.id)}
            className="hidden w-4 cursor-pointer lg:block"
            src={assets.prev_icon}
            alt=""
          />
          {playStatus ? (
            <img
              onClick={pause}
              className="w-5 cursor-pointer lg:w-4"
              src={assets.pause_icon}
              alt=""
            />
          ) : (
            <img
              onClick={play}
              className="w-5 cursor-pointer lg:w-4"
              src={assets.play_icon}
              alt=""
            />
          )}
          <img
            onClick={() => next(track.id)}
            className="w-5 cursor-pointer lg:w-4"
            src={assets.next_icon}
            alt=""
          />
          <img
            className="hidden w-4 cursor-pointer lg:block"
            src={assets.loop_icon}
            alt=""
          />
        </div>
        <div className="flex items-center gap-5">
          <p className="hidden lg:block">
            {time.currentTime.minutes}:
            {`${time.currentTime.seconds}`.length === 1 ? "0" : ""}
            {time.currentTime.seconds}
          </p>
          <div
            onClick={(e) => seekSong(e)}
            ref={seekBg}
            className="my-2 hidden w-[90vw] max-w-[500px] cursor-pointer rounded-full bg-gray-900 lg:block lg:w-[60vw]"
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
        <img src={assets.play_icon} alt="" className="w-4" />
        <img src={assets.mic_icon} alt="" className="w-4" />
        <img src={assets.queue_icon} alt="" className="w-4" />
        <img src={assets.speaker_icon} alt="" className="w-4" />
        <img src={assets.volume_icon} alt="" className="w-4" />
        <input
          onClick={volume}
          ref={volumeRef}
          className="volume h-1 w-20 cursor-pointer rounded-full"
          type="range"
          name=""
          id=""
        />
        <img src={assets.mini_player_icon} alt="" className="w-4" />
        <img src={assets.zoom_icon} alt="" className="w-4" />
      </div>
    </div>
  );
};

export default Player;
