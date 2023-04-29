import React from 'react';

export default function Popup() {
  const style = {
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: '100',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%'
  };

  return <div className="popup"></div>;
}
