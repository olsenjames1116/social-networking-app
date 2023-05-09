import React from 'react';
import PropTypes from 'prop-types';
import './MovieImage.css';

export default function MovieImage({ image }) {
  return <img src={`https://image.tmdb.org/t/p/original${image}`} />;
}

MovieImage.propTypes = {
  image: PropTypes.string
};
