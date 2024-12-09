import { createSlice } from "@reduxjs/toolkit";

const cachedFavourite = () => {
  if (localStorage.getItem("favourites")) {
    return JSON.parse(localStorage.getItem("favourites"));
  } else {
    return [];
  }
};
const favouriteSlice = createSlice({
  name: "favourite",
  initialState: { favourite: [] },
  reducers: {
    toggle(state, action) {
      let newTrack = action.payload;
      console.log(newTrack);
      const existingTrack = state.favourite.find(
        (track) => track.id === newTrack.id,
      );
      if (existingTrack) {
        state.favourite = state.favourite.filter(
          (track) => track.id !== newTrack.id,
        );
        return;
      } else {
        state.favourite.push(newTrack);
      }
    },
  },
});

export const favouriteSliceActions = favouriteSlice.actions;
export default favouriteSlice;
