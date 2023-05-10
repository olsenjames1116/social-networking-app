import React from 'react';
import PropTypes from 'prop-types';
import CommentUserInfo from '../CommentUserInfo/CommentUserInfo';
import CommentText from '../CommentText/CommentText';
import CommentInteraction from '../commentInteraction/CommentInteraction/CommentInteraction';
import { useSelector } from 'react-redux';
import CommentDate from '../CommentDate';
import './UserComment.css';

export default function UserComment({ comment }) {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.value);

  return (
    <li className="comment" id={comment.docId}>
      <CommentUserInfo user={comment.user} profilePic={comment.profilePicUrl} />
      <CommentText text={comment.text} />
      <CommentDate date={comment.timestamp} />
      {isLoggedIn && (
        <CommentInteraction likes={comment.likes} docId={comment.docId} userId={comment.id} />
      )}
    </li>
  );
}

UserComment.propTypes = {
  comment: PropTypes.object
};
