import React from 'react';
import { useDispatch } from 'react-redux';
import { hideMenu } from '../../redux/state/accountMenuSlice';

export default function Logo() {
  const dispatch = useDispatch();

  return (
    <div className="logo" onClick={() => dispatch(hideMenu())}>
      CineFile
    </div>
  );
}
