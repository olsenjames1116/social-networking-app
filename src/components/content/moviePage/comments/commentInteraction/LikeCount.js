import React from 'react';
import PropTypes from 'prop-types';

export default function LikeCount({ likes }) {
  return <span>{likes}</span>;
}

LikeCount.propTypes = {
  likes: PropTypes.number
};
