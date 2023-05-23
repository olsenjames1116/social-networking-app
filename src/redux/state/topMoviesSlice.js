import { createSlice } from '@reduxjs/toolkit';

// Stores the top movies from the API call to TMDB
export const topMoviesSlice = createSlice({
  name: 'topMovies',
  initialState: {
    value: []
  },
  reducers: {
    setTopMovies: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setTopMovies } = topMoviesSlice.actions;
export default topMoviesSlice.reducer;
