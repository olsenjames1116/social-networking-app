import React from 'react';
import PropTypes from 'prop-types';
import CommentUserInfo from './CommentUserInfo';
import CommentText from './CommentText';
import CommentInteraction from './commentInteraction/CommentInteraction';
import { useSelector } from 'react-redux';
import CommentDate from './CommentDate';

export default function UserComment({ comment }) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.value);

  return (
    <li id={comment.docId}>
      <CommentUserInfo user={comment.user} profilePic={comment.profilePicUrl} />
      <CommentText text={comment.text} />
      <CommentDate date={comment.timestamp} />
      {isLoggedIn && <CommentInteraction likes={comment.likes} docId={comment.docId} />}
    </li>
  );
}

UserComment.propTypes = {
  comment: PropTypes.object
};
