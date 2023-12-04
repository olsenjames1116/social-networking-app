import { createSlice } from '@reduxjs/toolkit';

// Hides and displays the account menu
export const accountMenuSlice = createSlice({
  name: 'accountMenu',
  initialState: {
    display: false
  },
  reducers: {
    displayMenu: (state) => {
      state.display = !state.display;
    },
    hideMenu: (state) => {
      state.display = false;
    }
  }
});

export const { displayMenu, hideMenu } = accountMenuSlice.actions;
export default accountMenuSlice.reducer;
