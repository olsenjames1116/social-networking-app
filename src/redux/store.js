import { configureStore } from '@reduxjs/toolkit';
import { isLoggedInReducer, accountMenuReducer } from './state';

export default configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer,
    accountMenu: accountMenuReducer
  }
});
