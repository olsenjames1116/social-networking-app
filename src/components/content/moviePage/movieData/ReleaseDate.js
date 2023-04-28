import React from 'react';
import PropTypes from 'prop-types';

export default function ReleaseDate({ date }) {
  const formatDate = () => {
    const dateArray = date.split('-');
    return dateArray[0];
  };

  return <span>{formatDate()}</span>;
}

ReleaseDate.propTypes = {
  date: PropTypes.string
};
