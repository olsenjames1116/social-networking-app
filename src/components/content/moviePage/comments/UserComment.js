import React from 'react';
import PropTypes from 'prop-types';
import CommentUserInfo from './CommentUserInfo';

export default function UserComment({ comment }) {
  return (
    <li>
      <CommentUserInfo user={comment.user} profilePic={comment.profilePicUrl} />
    </li>
  );
}

UserComment.propTypes = {
  comment: PropTypes.object
};
