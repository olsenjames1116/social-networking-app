import { configureStore } from '@reduxjs/toolkit';
import { isLoggedInReducer, accountMenuReducer, topMoviesReducer } from './state';

export default configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer,
    accountMenu: accountMenuReducer,
    topMovies: topMoviesReducer
  }
});
