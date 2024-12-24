import { createSlice } from "@reduxjs/toolkit";

const muteSlice = createSlice({
  name: "mute",
  initialState: { mute: false },
  reducers: {
    toggle(state) {
      state.mute = !state.mute;
    },
  },
});

export const muteActions = muteSlice.actions;
export default muteSlice;
