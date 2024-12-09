import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./spotify_logo.png";
import clock_icon from "./clock_icon.png";
import img1 from "./thegoat.jpg";
import img2 from "./halloffame.jpg";
import img6 from "./party.jpg";
import img7 from "./life.jpg";
import img8 from "./murder.jpg";
import img10 from "./img10.jpg";
import img11 from "./img11.jpg";
import img15 from "./img15.jpg";
import img16 from "./img16.jpg";
import song4 from "./Joyner_Lucas_x_Ty_Dolla_$ign_Late_to_the_Party.mp3";
import song5 from "./Lil_Uzi_Vert_The_Way_Life_Goes.mp3";
import song6 from "./Polo_G_21.mp3";
import song7 from "./Polo_G_Black_Hearted.mp3";
import song8 from "./YNW_Melly_Murder_On_My_Mind.mp3";
import song9 from "./Polo_G_I_Know.mp3";
import song10 from "./Polo_G_Fame_Riches_x_Roddy_Ricch.mp3";

export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
};

export const albumsData = [
  {
    id: 0,
    name: "The GOAT",
    image: img1,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#42555b",
  },
  {
    id: 1,
    name: "Hall Of Fame",
    image: img2,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#bd4707",
  },
  {
    id: 2,
    name: "Trending India",
    image: img10,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#742a2a",
  },
  {
    id: 3,
    name: "Trending Global",
    image: img16,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#44337a",
  },
  {
    id: 4,
    name: "Mega Hits",
    image: img11,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#234e52",
  },
  {
    id: 5,
    name: "Happy Favorites",
    image: img15,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#744210",
  },
];

export const albumSongs = [
  [
    {
      id: 5,
      name: "21",
      image: img1,
      file: song6,
      desc: "Polo G",
      duration: "2:45",
    },
    {
      id: 8,
      name: "I Know",
      image: img1,
      file: song9,
      desc: "Polo G",
      duration: "2:57",
    },
    {
      id: 5,
      name: "21",
      image: img1,
      file: song6,
      desc: "Polo G",
      duration: "2:45",
    },
    {
      id: 8,
      name: "I Know",
      image: img1,
      file: song9,
      desc: "Polo G",
      duration: "2:57",
    },
    {
      id: 5,
      name: "21",
      image: img1,
      file: song6,
      desc: "Polo G",
      duration: "2:45",
    },

    {
      id: 8,
      name: "I Know",
      image: img1,
      file: song9,
      desc: "Polo G",
      duration: "2:57",
    },
  ],
  [
    {
      id: 6,
      name: "Black Hearted",
      image: img2,
      file: song7,
      desc: "Polo G",
      duration: "3:14",
    },
    {
      id: 6,
      name: "Black Hearted",
      image: img2,
      file: song7,
      desc: "Polo G",
      duration: "3:14",
    },
    {
      id: 6,
      name: "Black Hearted",
      image: img2,
      file: song7,
      desc: "Polo G",
      duration: "3:14",
    },
    {
      id: 9,
      name: "Fame and Riches",
      image: img2,
      file: song10,
      desc: "Polo G",
      duration: "2:33",
    },
    {
      id: 9,
      name: "Fame and Riches",
      image: img2,
      file: song10,
      desc: "Polo G",
      duration: "2:33",
    },
    {
      id: 9,
      name: "Fame and Riches",
      image: img2,
      file: song10,
      desc: "Polo G",
      duration: "2:33",
    },
    {
      id: 9,
      name: "Fame and Riches",
      image: img2,
      file: song10,
      desc: "Polo G",
      duration: "2:33",
    },
  ],
];
export const songsData = [
  {
    id: 0,
    name: "Late To The Party",
    image: img6,
    file: song4,
    desc: "Joyner Lucas x TY Dolla $ign",
    duration: "3:29",
  },
  {
    id: 1,
    name: "The Way Life Goes",
    image: img7,
    file: song5,
    desc: "Lil Uzi Vert",
    duration: "3:42",
  },
  {
    id: 2,
    name: "21",
    image: img1,
    file: song6,
    desc: "Polo G",
    duration: "2:45",
  },
  {
    id: 3,
    name: "Black Hearted",
    image: img2,
    file: song7,
    desc: "Polo G",
    duration: "3:14",
  },
  {
    id: 4,
    name: "Murder On My Mind",
    image: img8,
    file: song8,
    desc: "YNW Melly",
    duration: "4:30",
  },
  {
    id: 5,
    name: "I Know",
    image: img1,
    file: song9,
    desc: "Polo G",
    duration: "2:57",
  },
  {
    id: 6,
    name: "Fame and Riches",
    image: img2,
    file: song10,
    desc: "Polo G",
    duration: "2:33",
  },
];
