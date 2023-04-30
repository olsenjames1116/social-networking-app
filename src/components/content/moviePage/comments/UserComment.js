import React from 'react';
import PropTypes from 'prop-types';
import CommentUserInfo from './CommentUserInfo';
import CommentText from './CommentText';
import CommentInteraction from './commentInteraction/CommentInteraction';

export default function UserComment({ comment }) {
  return (
    <li>
      <CommentUserInfo user={comment.user} profilePic={comment.profilePicUrl} />
      <CommentText text={comment.text} />
      <CommentInteraction likes={comment.likes} />
    </li>
  );
}

UserComment.propTypes = {
  comment: PropTypes.object
};
