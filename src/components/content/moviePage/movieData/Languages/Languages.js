import React from 'react';
import PropTypes from 'prop-types';
import './Languages.css';

// Represents the languages displayed on the movie page
export default function Languages({ languages }) {
  // Format languages for a cleaner output
  const displayLanguages = () => {
    const languageNames = languages ? languages.map((language) => language.english_name) : [];

    return languageNames.join(', ');
  };

  return <p className="languages">Languages: {displayLanguages()}</p>;
}

Languages.propTypes = {
  languages: PropTypes.array
};
