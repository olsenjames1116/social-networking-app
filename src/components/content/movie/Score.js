import React from 'react';
import PropTypes from 'prop-types';

export default function Score({ score, count }) {
  const formatScore = () => {
    return Math.round(score * 10) / 10;
  };

  return <p>{`${formatScore()}/10 (${count})`}</p>;
}

Score.propTypes = {
  score: PropTypes.number,
  count: PropTypes.number
};
