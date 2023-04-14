import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTopMovies } from '../../../redux/state/topMoviesSlice';
import Movie from './Movie';

export default function TopMovies() {
  const topMovies = useSelector((state) => state.topMovies.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated?api_key=4f9b51028fe2871ccd482413fd149522'
        );
        const data = await response.json();

        console.log(data.results);

        dispatch(setTopMovies(data.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="topMovies">
      {topMovies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
