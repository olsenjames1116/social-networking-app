import React from 'react';
import PropTypes from 'prop-types';
import './Languages.css';

export default function Languages({ languages }) {
  const displayLanguages = () => {
    const languageNames = languages ? languages.map((language) => language.english_name) : [];

    return languageNames.join(', ');
  };

  return <p className="languages">Languages: {displayLanguages()}</p>;
}

Languages.propTypes = {
  languages: PropTypes.array
};
