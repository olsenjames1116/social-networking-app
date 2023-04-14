import { createSlice } from '@reduxjs/toolkit';

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
