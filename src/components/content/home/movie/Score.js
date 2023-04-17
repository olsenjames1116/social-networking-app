import React from 'react';
import PropTypes from 'prop-types';

export default function Score({ score, count }) {
  return <p>{`${score} (${count})`}</p>;
}

Score.propTypes = {
  score: PropTypes.number,
  count: PropTypes.number
};
