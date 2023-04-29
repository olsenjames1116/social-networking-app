import React from 'react';
import { closeIcon } from '../../../../../images';

export default function CloseIcon() {
  const style = {
    height: '50px',
    width: 'auto'
  };

  return <img src={closeIcon} alt="A close icon" style={style}></img>;
}
