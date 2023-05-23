import { createSlice } from '@reduxjs/toolkit';

// Stores data for the currently selected movie from the home page
export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    value: {}
  },
  reducers: {
    setMovie: (state, action) => {
      state.value = action.payload;
    },
    clearMovie: (state) => {
      state.value = {};
    }
  }
});

export const { setMovie, clearMovie } = movieSlice.actions;
export default movieSlice.reducer;
