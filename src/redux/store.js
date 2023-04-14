import { configureStore } from '@reduxjs/toolkit';
import {
  isLoggedInReducer,
  accountMenuReducer,
  topMoviesReducer,
  mostPopularReducer,
  upcomingReducer
} from './state';

export default configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer,
    accountMenu: accountMenuReducer,
    topMovies: topMoviesReducer,
    mostPopular: mostPopularReducer,
    upcoming: upcomingReducer
  }
});
