import React from 'react';
import PropTypes from 'prop-types';
import MovieImage from './MovieImage/MovieImage';
import Score from './Score/Score';
import Title from './Title/Title';
import './Movie.css';

export default function Movie({ movie }) {
  return (
    <li className="movie">
      <MovieImage image={movie.poster_path} />
      <Score score={movie.vote_average} count={movie.vote_count} />
      <Title title={movie.title} />
    </li>
  );
}

Movie.propTypes = {
  movie: PropTypes.object
};
