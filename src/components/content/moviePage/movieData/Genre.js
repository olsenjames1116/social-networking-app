import React from 'react';
import PropTypes from 'prop-types';

export default function Genre({ genres }) {
  const displayGenres = () => {
    const genreNames = genres ? genres.map((genre) => genre.name) : [];

    return genreNames.join(', ');
  };

  return (
    <p>
      <span>Genre:</span>
      <span>{displayGenres()}</span>
    </p>
  );
}

Genre.propTypes = {
  genres: PropTypes.array
};
