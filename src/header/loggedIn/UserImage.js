import React from 'react';
import { useSelector } from 'react-redux';

export default function UserImage() {
  const { image } = useSelector((state) => state.userInfo);

  return (
    <img className="userImage" src={localStorage.getItem('image')} alt="The user's profile photo" />
  );
}
