import { createSlice } from '@reduxjs/toolkit';

export const accountMenuSlice = createSlice({
  name: 'accountMenu',
  initialState: {
    display: false
  },
  reducers: {
    displayMenu: (state) => {
      state.display = true;
    },
    hideMenu: (state) => {
      state.display = false;
    }
  }
});

export const { displayMenu, hideMenu } = accountMenuSlice.actions;
export default accountMenuSlice.reducer;
