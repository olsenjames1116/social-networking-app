import React from 'react';
import PropTypes from 'prop-types';

export default function CommentUserInfo({ user, profilePic }) {
  const style = {
    height: '50px',
    width: 'auto'
  };

  return (
    <div className="commentUserInfo">
      <img src={profilePic} style={style} />
      <span>{user}</span>
    </div>
  );
}

CommentUserInfo.propTypes = {
  user: PropTypes.string,
  profilePic: PropTypes.string
};
