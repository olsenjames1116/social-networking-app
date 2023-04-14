import { createSlice } from '@reduxjs/toolkit';

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
