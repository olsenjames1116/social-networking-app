import React from 'react';
import PropTypes from 'prop-types';
import MovieImage from './MovieImage';
import Score from './Score';
import Title from './Title';

export default function Movie({ movie }) {
  return (
    <li key={movie.id}>
      <MovieImage image={movie.poster_path} />
      <Score />
      <Title title={movie.title} />
    </li>
  );
}

Movie.propTypes = {
  movie: PropTypes.object
};
