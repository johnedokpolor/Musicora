import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";
import trackSlice from "./trackSlice";
import playStatusSlice from "./playStatus";
import muteSlice from "./mute";
const store = configureStore({
  reducer: {
    darkmode: darkModeSlice.reducer,
    track: trackSlice.reducer,
    playStatus: playStatusSlice.reducer,
    mute: muteSlice.reducer,
  },
});

export default store;
