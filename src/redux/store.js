import { configureStore } from '@reduxjs/toolkit';
import {
  isLoggedInReducer,
  accountMenuReducer,
  topMoviesReducer,
  mostPopularReducer,
  trendingReducer,
  movieReducer
} from './state';

export default configureStore({
  reducer: {
    isLoggedIn: isLoggedInReducer,
    accountMenu: accountMenuReducer,
    topMovies: topMoviesReducer,
    mostPopular: mostPopularReducer,
    trending: trendingReducer,
    movie: movieReducer
  }
});
