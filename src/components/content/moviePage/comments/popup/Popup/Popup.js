import React from 'react';
import CloseIcon from '../CloseIcon/CloseIcon';
import CommentForm from '../CommentForm/CommentForm';
import './Popup.css';

// Represents the new comment popup
export default function Popup() {
  return (
    <div className="popup">
      <CloseIcon />
      <CommentForm />
    </div>
  );
}
