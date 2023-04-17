import React from 'react';
import MovieImage from '../../home/movieData/MovieImage';
import PropTypes from 'prop-types';

export default function MovieData({ movie }) {
  return (
    <div className="movie">
      <MovieImage image={movie.poster_path} />
    </div>
  );
}

MovieData.propTypes = {
  movie: PropTypes.object
};
