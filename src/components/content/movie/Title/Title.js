import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

// Represents the movie title for each movie from the API calls
export default function Title({ title }) {
  return <p className="title">{title}</p>;
}

Title.propTypes = {
  title: PropTypes.string
};
