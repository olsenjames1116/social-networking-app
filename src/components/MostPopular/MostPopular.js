import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMostPopular } from '../../redux/state/mostPopularSlice';
import Movie from '../Movie/Movie';
import { Link } from 'react-router-dom';
import ArrowLeft from '../ArrowLeft/ArrowLeft';
import ArrowRight from '../ArrowRight/ArrowRight';
import '../MovieList/MovieList.css';
import {
  incrementClicks,
  decrementClicks,
  resetClicks
} from '../../redux/state/mostPopularClicksSlice';

// Represents the most popular movies from the API call to TMDB
export default function MostPopular() {
  const mostPopular = useSelector((state) => state.mostPopular.value);
  const mostPopularClicks = useSelector((state) => state.mostPopularClicks.value);
  const dispatch = useDispatch();
  const mostPopularElements = document.querySelectorAll('ul.mostPopular > a > li');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=4f9b51028fe2871ccd482413fd149522'
        );
        const data = await response.json();

        // Only retrieve the first 10 movies from the API call
        dispatch(setMostPopular(data.results.slice(0, 10)));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mostPopular movieList">
      <h2>Most Popular</h2>
      <div className="sliderContainer">
        <ArrowLeft
          clicks={mostPopularClicks}
          decrementClicks={decrementClicks}
          movieElements={mostPopularElements}
          resetClicks={resetClicks}
        />
        <ul className="mostPopular movieList">
          {mostPopular.map((movie) => {
            return (
              <Link key={movie.id} to={`/${movie.id}`}>
                <Movie movie={movie} />
              </Link>
            );
          })}
        </ul>
        <ArrowRight
          clicks={mostPopularClicks}
          incrementClicks={incrementClicks}
          resetClicks={resetClicks}
          movieElements={mostPopularElements}
        />
      </div>
    </div>
  );
}
