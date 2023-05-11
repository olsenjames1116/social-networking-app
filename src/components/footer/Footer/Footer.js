import React from 'react';
import Author from '../Author/Author';
import Sources from '../Sources/Sources';
import './Footer.css';
import { useDispatch } from 'react-redux';
import { hideMenu } from '../../../redux/state/accountMenuSlice';

export default function Footer() {
  const dispatch = useDispatch();

  return (
    <div className="footer" onClick={() => dispatch(hideMenu())}>
      <Author />
      <Sources />
    </div>
  );
}
