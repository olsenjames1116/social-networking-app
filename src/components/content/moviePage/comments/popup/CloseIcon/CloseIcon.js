import React from 'react';
import { closeIcon } from '../../../../../../images';
import { useDispatch } from 'react-redux';
import { hidePopup } from '../../../../../../redux/state/popupSlice';
import { resetCharacterCount } from '../../../../../../redux/state/characterCountSlice';
import './CloseIcon.css';

export default function CloseIcon() {
  const dispatch = useDispatch();

  const cancelInput = () => {
    const popupTextarea = document.querySelector('textarea#comment');
    popupTextarea.textContent = '';

    dispatch(resetCharacterCount());
    dispatch(hidePopup());
  };

  return <img src={closeIcon} alt="A close icon" onClick={() => cancelInput()}></img>;
}
