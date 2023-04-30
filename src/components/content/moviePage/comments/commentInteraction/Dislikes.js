import React from 'react';
import { dislikeIcon } from '../../../../../images';

export default function Dislikes() {
  const style = {
    height: '30px',
    width: 'auto'
  };

  return (
    <div className="dislikes">
      <img src={dislikeIcon} alt="A thumbs down icon" style={style} />
    </div>
  );
}
