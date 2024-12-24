import { useState, useEffect, useContext } from "react";
import Sidebar from "./components/Sidebar";
import { useSelector } from "react-redux";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./context/PlayerContext";
import "./style.css";
import BottomNav from "./components/BottomNav";

function App() {
  const { audioRef, autoNext } = useContext(PlayerContext);
  const dark = useSelector((state) => state.darkmode.dark);
  const track = useSelector((state) => state.track.track);

  return (
    <div>
      <div className={dark ? "dark" : "light"}>
        <div className="flex h-[80%] lg:h-[90%]">
          <Sidebar />
          <Display />
        </div>
        <Player />
        <BottomNav />
        <audio
          ref={audioRef}
          src={track.file}
          onEnded={() => autoNext(track.id)}
          preload="auto"
        ></audio>
      </div>
    </div>
  );
}

export default App;
