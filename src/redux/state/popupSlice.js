import { createSlice } from '@reduxjs/toolkit';

// Displays or hides the popup when the new comment button is clicked
export const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    value: false
  },
  reducers: {
    displayPopup: (state) => {
      state.value = !state.value;
    },
    hidePopup: (state) => {
      state.value = !state.value;
    }
  }
});

export const { displayPopup, hidePopup } = popupSlice.actions;
export default popupSlice.reducer;
