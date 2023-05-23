import React from 'react';
import { useDispatch } from 'react-redux';
import { hideMenu } from '../../../../redux/state/accountMenuSlice';
import './UserImage.css';

// Represents the user's image that is displayed if a user is logged in
export default function UserImage() {
  const dispatch = useDispatch();

  return (
    <li className="userImage" onClick={() => dispatch(hideMenu())}>
      <img src={localStorage.getItem('image')} alt="The user's profile photo" />
    </li>
  );
}
