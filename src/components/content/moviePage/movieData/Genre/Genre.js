import React from 'react';
import PropTypes from 'prop-types';
import './Genre.css';

// Represents the genre displayed on each movie page
export default function Genre({ genres }) {
  // Display genres retrieved for each movie
  const displayGenres = () => {
    const genreNames = genres ? genres.map((genre) => genre.name) : [];

    return genreNames.join(', ');
  };

  return <p className="genre">Genre: {displayGenres()}</p>;
}

Genre.propTypes = {
  genres: PropTypes.array
};
