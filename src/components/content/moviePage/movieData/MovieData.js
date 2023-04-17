import React from 'react';
import MovieImage from '../../home/movie/MovieImage';
import PropTypes from 'prop-types';
import Title from '../../home/movie/Title';
import Score from '../../home/movie/Score';

export default function MovieData({ movie }) {
  return (
    <div className="movie">
      <MovieImage image={movie.poster_path} />
      <Title title={movie.title} />
    </div>
  );
}

MovieData.propTypes = {
  movie: PropTypes.object
};
