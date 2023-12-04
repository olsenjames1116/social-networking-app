import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrending } from '../../../redux/state/trendingSlice';
import Movie from '../movie/Movie';
import { Link } from 'react-router-dom';
import ArrowLeft from './ArrowLeft/ArrowLeft';
import ArrowRight from './ArrowRight/ArrowRight';
import './MovieList.css';
import {
  incrementClicks,
  decrementClicks,
  resetClicks
} from '../../../redux/state/trendingClicksSlice';

// Represents the trending movies from the API call to TMDB
export default function Trending() {
  const trending = useSelector((state) => state.trending.value);
  const trendingClicks = useSelector((state) => state.trendingClicks.value);
  const dispatch = useDispatch();
  const trendingElements = document.querySelectorAll('ul.trending > a > li');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=4f9b51028fe2871ccd482413fd149522'
        );
        const data = await response.json();

        // Only retrieve the first 10 movies from the API call
        dispatch(setTrending(data.results.slice(0, 10)));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="trending movieList">
      <h2>Trending</h2>
      <div className="sliderContainer">
        <ArrowLeft
          clicks={trendingClicks}
          decrementClicks={decrementClicks}
          movieElements={trendingElements}
          resetClicks={resetClicks}
        />
        <ul className="trending movieList">
          {trending.map((movie) => {
            return (
              <Link key={movie.id} to={`/${movie.id}`}>
                <Movie key={movie.id} movie={movie} />
              </Link>
            );
          })}
        </ul>
        <ArrowRight
          clicks={trendingClicks}
          incrementClicks={incrementClicks}
          resetClicks={resetClicks}
          movieElements={trendingElements}
        />
      </div>
    </div>
  );
}
