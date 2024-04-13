import React from 'react';
import { closeIcon } from '../../images';
import { useDispatch } from 'react-redux';
import { hidePopup } from '../../redux/state/popupSlice';
import { resetCharacterCount } from '../../redux/state/characterCountSlice';
import './CloseIcon.css';

// Represents the close icon on the popup for new comments
export default function CloseIcon() {
  const dispatch = useDispatch();

  // Hides the popup, resets the character count and clears all input when the close icon is clicked
  const cancelInput = () => {
    const popupTextarea = document.querySelector('textarea#comment');
    popupTextarea.textContent = '';

    dispatch(resetCharacterCount());
    dispatch(hidePopup());
  };

  return <img src={closeIcon} alt="A close icon" onClick={() => cancelInput()}></img>;
}
