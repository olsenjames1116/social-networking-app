import React from 'react';
import PropTypes from 'prop-types';

// Represents the number of likes for each comment
export default function LikeCount({ likes }) {
  return <span>{likes}</span>;
}

LikeCount.propTypes = {
  likes: PropTypes.number
};
