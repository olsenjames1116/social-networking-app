import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTopMovies } from '../../../redux/state/topMoviesSlice';
import Movie from '../movie/Movie';
import { Link } from 'react-router-dom';
import ArrowLeft from './ArrowLeft/ArrowLeft';
import ArrowRight from './ArrowRight/ArrowRight';
import './MovieList.css';
import {
  incrementClicks,
  decrementClicks,
  resetClicks
} from '../../../redux/state/topMovieClicksSlice';

// Represents the top movies from the API call to TMDB
export default function TopMovies() {
  const topMovies = useSelector((state) => state.topMovies.value);
  const topMoviesClicks = useSelector((state) => state.topMovieClicks.value);
  const dispatch = useDispatch();
  const topMoviesElements = document.querySelectorAll('ul.topMovies > a > li');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=4f9b51028fe2871ccd482413fd149522'
        );
        const data = await response.json();

        // Only retrieve the first 10 movies from the API call
        dispatch(setTopMovies(data.results.slice(0, 10)));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="topMovies movieList">
      <h2>Top Movies</h2>
      <div className="sliderContainer">
        <ArrowLeft
          clicks={topMoviesClicks}
          decrementClicks={decrementClicks}
          movieElements={topMoviesElements}
          resetClicks={resetClicks}
        />
        <ul className="topMovies movieList">
          {topMovies.map((movie) => {
            return (
              <Link key={movie.id} to={`/${movie.id}`}>
                <Movie key={movie.id} movie={movie} />
              </Link>
            );
          })}
        </ul>
        <ArrowRight
          clicks={topMoviesClicks}
          incrementClicks={incrementClicks}
          resetClicks={resetClicks}
          movieElements={topMoviesElements}
        />
      </div>
    </div>
  );
}
