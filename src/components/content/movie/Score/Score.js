import React from 'react';
import PropTypes from 'prop-types';
import './Score.css';
import { starIcon } from '../../../../images';

// Represents the movie score for each movie from the API calls
export default function Score({ score, count }) {
  //Round and format scores to give the user a cleaner and better view at what the scores represent
  const formatScore = () => {
    const roundedScore = Math.round(score * 10) / 10;
    return `${roundedScore}/10 (${count})`;
  };

  return (
    <div className="score">
      <p className="score">{formatScore()}</p>
      <img src={starIcon} alt="A star" />
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number,
  count: PropTypes.number
};
