import { createSlice } from '@reduxjs/toolkit';

export const characterCountSlice = createSlice({
  name: 'characterCount',
  initialState: {
    value: 0
  },
  reducers: {
    setCharacterCount: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setCharacterCount } = characterCountSlice.actions;
export default characterCountSlice.reducer;
