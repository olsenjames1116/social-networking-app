import { createSlice } from '@reduxjs/toolkit';

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
