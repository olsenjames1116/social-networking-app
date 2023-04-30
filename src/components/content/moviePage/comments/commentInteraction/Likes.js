import React from 'react';
import { likeIcon } from '../../../../../images';

export default function Likes() {
  const style = {
    height: '30px',
    width: 'auto'
  };

  return (
    <div className="likes">
      <img src={likeIcon} alt="A thumbs up icon" style={style} />
    </div>
  );
}
