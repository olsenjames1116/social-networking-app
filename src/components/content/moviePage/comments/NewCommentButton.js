import React from 'react';
import { useDispatch } from 'react-redux';
import { displayPopup } from '../../../../redux/state/popupSlice';

export default function NewCommentButton() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(displayPopup())}>+Comment</button>;
}
