import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ title }) {
  return <p>{title}</p>;
}

Title.propTypes = {
  title: PropTypes.string
};
