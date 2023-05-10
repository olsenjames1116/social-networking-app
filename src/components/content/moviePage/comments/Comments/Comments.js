import React from 'react';
import NewCommentButton from '../NewCommentButton/NewCommentButton';
import { useSelector } from 'react-redux';
import UserComments from '../UserComments/UserComments';
import './Comments.css';

export default function Comments() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.value);

  return (
    <div className="comments">
      <h2>Comments</h2>
      {isLoggedIn && <NewCommentButton />}
      <UserComments />
    </div>
  );
}
