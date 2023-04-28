import React from 'react';
import PropTypes from 'prop-types';

export default function Overview({ overview }) {
  return <p>{overview}</p>;
}

Overview.propTypes = {
  overview: PropTypes.string
};
