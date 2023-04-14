import { createSlice } from '@reduxjs/toolkit';

export const upcomingSlice = createSlice({
  name: 'upcoming',
  initialState: {
    value: []
  },
  reducers: {
    setUpcoming: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setUpcoming } = upcomingSlice.actions;
export default upcomingSlice.reducer;
