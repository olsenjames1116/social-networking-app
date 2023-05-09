import { createSlice } from '@reduxjs/toolkit';

export const trendingClicksSlice = createSlice({
  name: 'trendingClicks',
  initialState: {
    value: 0
  },
  reducers: {
    incrementClicks: (state) => (state.value += 1),
    decrementClicks: (state) => (state.value -= 1)
  }
});

export const { incrementClicks, decrementClicks } = trendingClicksSlice.actions;
export default trendingClicksSlice.reducer;
