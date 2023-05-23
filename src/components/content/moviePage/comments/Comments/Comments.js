import React from 'react';
import NewCommentButton from '../NewCommentButton/NewCommentButton';
import { useSelector } from 'react-redux';
import UserComments from '../UserComments/UserComments';
import './Comments.css';

// Represents the comments section for each movie page
export default function Comments() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.value);

  return (
    <div className="comments">
      <h2>Comments</h2>
      {/* Only allow logged in users to make a comment*/}
      {isLoggedIn && <NewCommentButton />}
      <UserComments />
    </div>
  );
}
