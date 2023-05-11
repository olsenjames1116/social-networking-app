import React from 'react';
import PropTypes from 'prop-types';
import './Score.css';
import { starIcon } from '../../../../images';

export default function Score({ score, count }) {
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
