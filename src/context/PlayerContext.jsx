import { useRef, useState, useEffect } from "react";
import { createContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector, useDispatch } from "react-redux";
import { playStatusActions } from "../store/playStatus";
import { trackActions } from "../store/trackSlice";
import { songsData } from "../assets/assets";
import { muteActions } from "../store/mute";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const [favourites, setFavourites] = useState(() => {
    if (localStorage.getItem("favourites")) {
      return JSON.parse(localStorage.getItem("favourites"));
    } else {
      return [];
    }
  });
  const [time, setTime] = useState({
    currentTime: {
      seconds: 0,
      minutes: 0,
    },
    totalTime: {
      seconds: "00",
      minutes: 0,
    },
  });
  const audioRef = useRef();
  const volumeRef = useRef();
  const seekBar = useRef();
  const seekBg = useRef();

  const playStatus = useSelector((state) => state.playStatus.playStatus);
  const mute = useSelector((state) => state.mute.mute);
  const dispatch = useDispatch();

  useEffect(() => {
    volumeRef.current.max = 10;
    volumeRef.current.value = 1;
    audioRef.current.volume = volumeRef.current.value / 10;
  }, []);
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width =
          Math.floor(
            (audioRef.current.currentTime / audioRef.current.duration) * 100,
          ) + "%";

        setTime({
          currentTime: {
            seconds: Math.floor(audioRef.current.currentTime % 60),
            minutes: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            seconds: Math.floor(audioRef.current.duration % 60),
            minutes: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const playWithId = async (id) => {
    await dispatch(trackActions.play(id));
    await audioRef.current.play();
    dispatch(playStatusActions.on());
  };
  const play = () => {
    audioRef.current.play();
    dispatch(playStatusActions.on());
  };
  const pause = () => {
    audioRef.current.pause();
    dispatch(playStatusActions.off());
  };
  const prev = async (id) => {
    if (id > 0) {
      await dispatch(trackActions.prev(id - 1));
      await audioRef.current.play();
      dispatch(playStatusActions.on());
    }
  };
  const next = async (id) => {
    if (id < songsData.length - 1) {
      await dispatch(trackActions.next(id + 1));
      await audioRef.current.play();
      dispatch(playStatusActions.on());
    } else {
      await dispatch(trackActions.loop());
      await audioRef.current.play();
      dispatch(playStatusActions.on());
    }
  };
  const autoNext = async (id) => {
    if (id < songsData.length - 1) {
      await dispatch(trackActions.next(id + 1));
      await audioRef.current.play();
      dispatch(playStatusActions.on());
    }
  };
  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };
  const volume = async (e) => {
    audioRef.current.volume = volumeRef.current.value / 10;
  };
  const muteSong = () => {
    if (!mute) {
      audioRef.current.volume = 0;
      volumeRef.current.value = 0;
    } else {
      volumeRef.current.value = 2;
      audioRef.current.volume = volumeRef.current.value / 10;
    }
    dispatch(muteActions.toggle());
  };

  //   useEffect(() => {
  //     AOS.init({
  //       offset: 200,
  //       duration: 600,
  //       easing: "ease-in-sine",
  //       delay: 100,
  //     });
  //     AOS.refresh();
  //   }, []);

  const contextValue = {
    audioRef,
    volumeRef,
    seekBar,
    seekBg,
    play,
    pause,
    playStatus,
    time,
    playWithId,
    prev,
    next,
    seekSong,
    autoNext,
    volume,
    favourites,
    setFavourites,
    muteSong,
  };
  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
