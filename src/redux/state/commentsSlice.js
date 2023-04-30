import { createSlice } from '@reduxjs/toolkit';

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
    }
  }
});

export const { setComments, clearComments } = commentsSlice.actions;
export default commentsSlice.reducer;
