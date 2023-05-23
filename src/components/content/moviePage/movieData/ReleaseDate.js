import React from 'react';
import PropTypes from 'prop-types';

// Represents the release date displayed on the movie page under the movie data
export default function ReleaseDate({ date }) {
  // Format the date before displaying for a cleaner appearance
  const formatDate = () => {
    const dateArray = date ? date.split('-') : [];
    return dateArray[0];
  };

  return <span>{formatDate()}</span>;
}

ReleaseDate.propTypes = {
  date: PropTypes.string
};
