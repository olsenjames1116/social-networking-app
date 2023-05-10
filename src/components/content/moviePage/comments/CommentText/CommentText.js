import React from 'react';
import PropTypes from 'prop-types';
import './CommentText.css';

export default function CommentText({ text }) {
  return <p className="commentText">{text}</p>;
}

CommentText.propTypes = {
  text: PropTypes.string
};
