import { createSlice } from '@reduxjs/toolkit';

// Stores comments for the current movie page
export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    value: []
  },
  reducers: {
    setComments: (state, action) => {
      state.value = action.payload;
    },
    clearComments: (state) => {
      state.value = [];
    },
    changeLike: (state, action) => {
      const index = action.payload[0];
      const docObject = action.payload[1];

      state.value = [...state.value.slice(0, index), docObject, ...state.value.slice(index + 1)];
    }
  }
});

export const { setComments, clearComments, changeLike } = commentsSlice.actions;
export default commentsSlice.reducer;
