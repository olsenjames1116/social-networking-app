import React from 'react';
import { useDispatch } from 'react-redux';
import { displayPopup } from '../../redux/state/popupSlice';
import './NewCommentButton.css';

// Represents the comment button in the comment section
export default function NewCommentButton() {
  const dispatch = useDispatch();

  // Displays the popup to enter a new comment when the button is clicked
  return <button onClick={() => dispatch(displayPopup())}>+Comment</button>;
}
