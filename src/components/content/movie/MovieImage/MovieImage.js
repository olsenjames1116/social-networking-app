import React from 'react';
import PropTypes from 'prop-types';
import './MovieImage.css';

// Represents the movie poster for each movie from the API calls
export default function MovieImage({ image }) {
  return <img src={`https://image.tmdb.org/t/p/original${image}`} />;
}

MovieImage.propTypes = {
  image: PropTypes.string
};
