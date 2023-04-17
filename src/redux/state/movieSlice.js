import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    value: []
  },
  reducers: {
    setMovie: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setMovie } = movieSlice.actions;
export default movieSlice.reducer;
