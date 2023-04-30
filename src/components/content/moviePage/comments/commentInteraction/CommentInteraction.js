import React from 'react';
import Likes from './Likes';
import Dislikes from './Dislikes';

export default function CommentInteraction() {
  return (
    <div className="commentInteraction">
      <Likes />
      <Dislikes />
    </div>
  );
}
