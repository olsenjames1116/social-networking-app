import { createSlice } from '@reduxjs/toolkit';

export const trendingClicksSlice = createSlice({
  name: 'trendingClicks',
  initialState: {
    value: 0
  },
  reducers: {
    incrementClicks: (state) => {
      state.value += 1;
    },
    decrementClicks: (state) => {
      state.value -= 1;
    },
    resetClicks: (state) => {
      state.value = 0;
    }
  }
});

export const { incrementClicks, decrementClicks, resetClicks } = trendingClicksSlice.actions;
export default trendingClicksSlice.reducer;
