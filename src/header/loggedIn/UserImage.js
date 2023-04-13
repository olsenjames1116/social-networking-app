import React from 'react';

export default function UserImage() {
  return (
    <li className="userImage">
      <img src={localStorage.getItem('image')} alt="The user's profile photo" />
    </li>
  );
}
