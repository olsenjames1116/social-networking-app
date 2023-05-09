import { createSlice } from '@reduxjs/toolkit';

export const topMovieClicksSlice = createSlice({
  name: 'topMovieClicks',
  initialState: {
    value: 0
  },
  reducers: {
    incrementClicks: (state) => (state.value += 1),
    decrementClicks: (state) => (state.value -= 1)
  }
});

export const { incrementClicks, decrementClicks } = topMovieClicksSlice.actions;
export default topMovieClicksSlice.reducer;
