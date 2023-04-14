import React from 'react';
import PropTypes from 'prop-types';
import MovieImage from './MovieImage';

export default function Movie({ movie }) {
  return (
    <li key={movie.id}>
      <MovieImage image={movie.poster_path} />
    </li>
  );
}

Movie.propTypes = {
  movie: PropTypes.object
};
