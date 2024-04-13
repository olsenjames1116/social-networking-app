import React from 'react';
import PropTypes from 'prop-types';
import './Overview.css';

// Represents the overview displayed on the movie page under movie data
export default function Overview({ overview }) {
  return <p className="overview">{overview}</p>;
}

Overview.propTypes = {
  overview: PropTypes.string
};
