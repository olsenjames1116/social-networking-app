import React from 'react';
import PropTypes from 'prop-types';
import './Genre.css';

export default function Genre({ genres }) {
  const displayGenres = () => {
    const genreNames = genres ? genres.map((genre) => genre.name) : [];

    return genreNames.join(', ');
  };

  return <p className="genre">Genre: {displayGenres()}</p>;
}

Genre.propTypes = {
  genres: PropTypes.array
};
