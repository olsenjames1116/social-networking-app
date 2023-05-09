import React from 'react';
import { useDispatch } from 'react-redux';
import { hideMenu } from '../../../redux/state/accountMenuSlice';

export default function Logo() {
  const dispatch = useDispatch();

  return (
    <h1 className="logo" onClick={() => dispatch(hideMenu())}>
      FlickChat
    </h1>
  );
}
