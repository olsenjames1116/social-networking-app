import React from 'react';
import PropTypes from 'prop-types';
import './Overview.css';

export default function Overview({ overview }) {
  return <p className="overview">{overview}</p>;
}

Overview.propTypes = {
  overview: PropTypes.string
};
