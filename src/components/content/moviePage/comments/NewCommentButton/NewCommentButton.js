import React from 'react';
import { useDispatch } from 'react-redux';
import { displayPopup } from '../../../../../redux/state/popupSlice';
import './NewCommentButton.css';

export default function NewCommentButton() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(displayPopup())}>+Comment</button>;
}
