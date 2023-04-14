import React from 'react';
import PropTypes from 'prop-types';

export default function Movie({ movie }) {
  return <li key={movie.id}></li>;
}

Movie.propTypes = {
  movie: PropTypes.object
};
