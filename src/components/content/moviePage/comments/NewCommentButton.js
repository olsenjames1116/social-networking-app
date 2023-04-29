import React from 'react';

export default function NewCommentButton() {
  const popupStyle = {
    backgroundColor: 'white',
    position: 'fixed',
    zIndex: '100',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%'
  };

  const pageCoverStyle = {
    display: 'block',
    position: 'fixed',
    zIndex: '10',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    width: '100vw',
    height: '100vh',
    top: '0',
    left: '0'
  };

  const displayCommentPopup = () => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.textContent = 'Popup';
    Object.assign(popup.style, popupStyle);

    const pageCover = document.createElement('div');
    pageCover.classList.add('pageCover');
    Object.assign(pageCover.style, pageCoverStyle);

    const root = document.getElementById('root');
    root.append(pageCover, popup);
  };

  return <button onClick={() => displayCommentPopup()}>+Comment</button>;
}
