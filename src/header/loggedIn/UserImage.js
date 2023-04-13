import React from 'react';
import { useDispatch } from 'react-redux';
import { hideMenu } from '../../redux/state/accountMenuSlice';

export default function UserImage() {
  const dispatch = useDispatch();

  return (
    <li className="userImage" onClick={() => dispatch(hideMenu())}>
      <img src={localStorage.getItem('image')} alt="The user's profile photo" />
    </li>
  );
}
