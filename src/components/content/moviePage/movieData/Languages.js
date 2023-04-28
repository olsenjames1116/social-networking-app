import React from 'react';
import PropTypes from 'prop-types';

export default function Languages({ languages }) {
  const displayLanguages = () => {
    const languageNames = languages ? languages.map((language) => language.english_name) : [];

    return languageNames.join(', ');
  };

  return (
    <p>
      <span>Languages:</span>
      <span>{displayLanguages()}</span>
    </p>
  );
}

Languages.propTypes = {
  languages: PropTypes.array
};
