import { createSlice } from '@reduxjs/toolkit';

export const mostPopularClicksSlice = createSlice({
  name: 'mostPopularClicks',
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

export const { incrementClicks, decrementClicks, resetClicks } = mostPopularClicksSlice.actions;
export default mostPopularClicksSlice.reducer;
