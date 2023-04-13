import { configureStore } from '@reduxjs/toolkit';
import { isLoggedInReducer } from './state';

export default configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer
  }
});
