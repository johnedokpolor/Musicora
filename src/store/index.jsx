import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";
import trackSlice from "./trackSlice";
import playStatusSlice from "./PlayStatus";
const store = configureStore({
  reducer: {
    darkmode: darkModeSlice.reducer,
    track: trackSlice.reducer,
    playStatus: playStatusSlice.reducer,
  },
});

export default store;
