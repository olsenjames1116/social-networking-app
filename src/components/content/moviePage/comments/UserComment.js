import React from 'react';
import PropTypes from 'prop-types';
import CommentUserInfo from './CommentUserInfo';
import CommentText from './CommentText';

export default function UserComment({ comment }) {
  return (
    <li>
      <CommentUserInfo user={comment.user} profilePic={comment.profilePicUrl} />
      <CommentText text={comment.text} />
    </li>
  );
}

UserComment.propTypes = {
  comment: PropTypes.object
};
