import { createSlice } from '@reduxjs/toolkit';

// Stores the most popular movies from the API call to TMDB
export const mostPopularSlice = createSlice({
  name: 'mostPopular',
  initialState: {
    value: []
  },
  reducers: {
    setMostPopular: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setMostPopular } = mostPopularSlice.actions;
export default mostPopularSlice.reducer;
