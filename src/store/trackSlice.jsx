import { createSlice } from "@reduxjs/toolkit";
import { songsData } from "../assets/assets";

const trackSlice = createSlice({
  name: "track",
  initialState: { track: songsData[0] },
  reducers: {
    play(state, action) {
      const id = action.payload;
      state.track = songsData[id];
    },
    prev(state, action) {
      let id = action.payload;
      state.track = songsData[id];
    },
    next(state, action) {
      let id = action.payload;
      state.track = songsData[id];
    },
    loop(state) {
      state.track = songsData[0];
    },
  },
});
export const trackActions = trackSlice.actions;
export default trackSlice;
