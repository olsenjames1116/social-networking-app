import React from 'react';
import Likes from './Likes';
import Dislikes from './Dislikes';
import LikeCount from './LikeCount';
import PropTypes from 'prop-types';

export default function CommentInteraction({ likes }) {
  return (
    <div className="commentInteraction">
      <Likes likes={likes} />
      <LikeCount likes={likes} />
      <Dislikes likes={likes} />
    </div>
  );
}

CommentInteraction.propTypes = {
  likes: PropTypes.number
};
