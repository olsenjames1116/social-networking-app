import React from 'react';

export default function PageCover() {
  const style = {
    display: 'block',
    position: 'fixed',
    zIndex: '10',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    width: '100vw',
    height: '100vh',
    top: '0',
    left: '0'
  };

  return <div className="pageCover" style={style}></div>;
}
