import React from 'react';
import { useDispatch } from 'react-redux';
import { hideMenu } from '../../../../redux/state/accountMenuSlice';
import './UserName.css';

export default function UserName() {
  const dispatch = useDispatch();

  return (
    <li className="userName" onClick={() => dispatch(hideMenu())}>
      {localStorage.getItem('name')}
    </li>
  );
}
