import React from 'react';
import { closeIcon } from '../../../../../images';
import { useDispatch } from 'react-redux';
import { hidePopup } from '../../../../../redux/state/popupSlice';
import { resetCharacterCount } from '../../../../../redux/state/characterCountSlice';

export default function CloseIcon() {
  const dispatch = useDispatch();

  const style = {
    height: '50px',
    width: 'auto'
  };

  const cancelInput = () => {
    const popupTextarea = document.querySelector('textarea#comment');
    popupTextarea.textContent = '';

    dispatch(resetCharacterCount());
    dispatch(hidePopup());
  };

  return <img src={closeIcon} alt="A close icon" style={style} onClick={() => cancelInput()}></img>;
}
