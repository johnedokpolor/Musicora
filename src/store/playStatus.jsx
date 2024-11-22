import { createSlice } from "@reduxjs/toolkit";

const playStatusSlice = createSlice({
  name: "playStatus",
  initialState: { playStatus: false },
  reducers: {
    on(state) {
      state.playStatus = true;
    },
    off(state) {
      state.playStatus = false;
    },
  },
});
export const playStatusActions = playStatusSlice.actions;
export default playStatusSlice;
