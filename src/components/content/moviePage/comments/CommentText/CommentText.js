import React from 'react';
import PropTypes from 'prop-types';
import './CommentText.css';

// Represents the main body of each comment
export default function CommentText({ text }) {
  return <p className="commentText">{text}</p>;
}

CommentText.propTypes = {
  text: PropTypes.string
};
