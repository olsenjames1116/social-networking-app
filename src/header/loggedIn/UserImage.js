import React from 'react';

export default function UserImage() {
  return (
    <img className="userImage" src={localStorage.getItem('image')} alt="The user's profile photo" />
  );
}
