import React, { useEffect } from 'react';
import MovieImage from '../../movie/MovieImage';
import PropTypes from 'prop-types';
import Title from '../../movie/Title';
import Score from '../../movie/Score';
import Runtime from './Runtime';
import { useDispatch, useSelector } from 'react-redux';
import { setMovie, clearMovie } from '../../../../redux/state/movieSlice';

export default function MovieData({ id }) {
  const movie = useSelector((state) => state.movie.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMovie());

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4f9b51028fe2871ccd482413fd149522`
        );

        const data = await response.json();

        console.log(data);

        dispatch(setMovie(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movie">
      <MovieImage image={movie.poster_path} />
      <Title title={movie.title} />
      <Score score={movie.vote_average} count={movie.vote_count} />
      <Runtime runtime={movie.runtime} />
    </div>
  );
}

MovieData.propTypes = {
  id: PropTypes.string
};
