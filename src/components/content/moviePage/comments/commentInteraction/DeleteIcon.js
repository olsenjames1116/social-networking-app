import React from 'react';
import { deleteIcon } from '../../../../../images';

export default function DeleteIcon() {
  const style = {
    height: '50px',
    width: 'auto'
  };

  return <img src={deleteIcon} alt="A trash can icon" style={style} />;
}
