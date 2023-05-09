import React from 'react';
import PropTypes from 'prop-types';
import './Score.css';

export default function Score({ score, count }) {
  const formatScore = () => {
    const roundedScore = Math.round(score * 10) / 10;
    return `${roundedScore}/10 (${count})`;
  };

  return <p className="score">{formatScore()}</p>;
}

Score.propTypes = {
  score: PropTypes.number,
  count: PropTypes.number
};
