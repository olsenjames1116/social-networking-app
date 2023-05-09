import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

export default function Title({ title }) {
  return <p className="title">{title}</p>;
}

Title.propTypes = {
  title: PropTypes.string
};
