import React from 'react';
import Likes from '../Likes/Likes';
import Dislikes from '../Dislikes/Dislikes';
import LikeCount from '../LikeCount';
import PropTypes from 'prop-types';
import DeleteIcon from '../DeleteIcon/DeleteIcon';
import './CommentInteraction.css';

export default function CommentInteraction({ likes, docId, userId }) {
  return (
    <div className="commentInteraction">
      <Likes likes={likes} docId={docId} />
      <LikeCount likes={likes} />
      <Dislikes likes={likes} docId={docId} />
      {userId === localStorage.getItem('id') && <DeleteIcon docId={docId} />}
    </div>
  );
}

CommentInteraction.propTypes = {
  likes: PropTypes.number,
  docId: PropTypes.string,
  userId: PropTypes.string
};
