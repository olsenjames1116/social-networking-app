import { createSlice } from '@reduxjs/toolkit';

export const characterCountSlice = createSlice({
  name: 'characterCount',
  initialState: {
    value: 0
  },
  reducers: {
    setCharacterCount: (state, action) => {
      state.value = action.payload;
    },
    resetCharacterCount: (state) => {
      state.value = 0;
    }
  }
});

export const { setCharacterCount, resetCharacterCount } = characterCountSlice.actions;
export default characterCountSlice.reducer;
