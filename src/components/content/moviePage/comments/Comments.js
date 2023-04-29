import React from 'react';
import NewCommentButton from './NewCommentButton';
import { useSelector } from 'react-redux';

export default function Comments() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.value);

  return (
    <div className="comments">
      <h2>Comments</h2>
      {isLoggedIn && <NewCommentButton />}
    </div>
  );
}
