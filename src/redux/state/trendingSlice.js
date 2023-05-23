import { createSlice } from '@reduxjs/toolkit';

// Stores the trending movies from the API call to TMDB
export const trendingSlice = createSlice({
  name: 'trending',
  initialState: {
    value: []
  },
  reducers: {
    setTrending: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setTrending } = trendingSlice.actions;
export default trendingSlice.reducer;
