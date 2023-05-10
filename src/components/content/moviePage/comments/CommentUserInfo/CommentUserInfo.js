import React from 'react';
import PropTypes from 'prop-types';
import './CommentUserInfo.css';

export default function CommentUserInfo({ user, profilePic }) {
  return (
    <div className="commentUserInfo">
      <img src={profilePic} alt="The user's profile photo" />
      <span>{user}</span>
    </div>
  );
}

CommentUserInfo.propTypes = {
  user: PropTypes.string,
  profilePic: PropTypes.string
};
