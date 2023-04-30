import React from 'react';
import PropTypes from 'prop-types';

export default function CommentText({ text }) {
  return <p>{text}</p>;
}

CommentText.propTypes = {
  text: PropTypes.string
};
