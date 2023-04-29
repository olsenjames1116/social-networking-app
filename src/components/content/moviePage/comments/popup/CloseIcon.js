import React from 'react';
import { closeIcon } from '../../../../../images';
import { useDispatch } from 'react-redux';
import { hidePopup } from '../../../../../redux/state/popupSlice';

export default function CloseIcon() {
  const dispatch = useDispatch();

  const style = {
    height: '50px',
    width: 'auto'
  };

  return (
    <img
      src={closeIcon}
      alt="A close icon"
      style={style}
      onClick={() => dispatch(hidePopup())}></img>
  );
}
