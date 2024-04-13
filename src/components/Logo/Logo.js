import React from 'react';
import { useDispatch } from 'react-redux';
import { hideMenu } from '../../redux/state/accountMenuSlice';
import { logo } from '../../images';
import './Logo.css';
import { Link } from 'react-router-dom';

// Represents the logo displayed in the header
export default function Logo() {
  const dispatch = useDispatch();

  return (
    <div className="logo">
      <a href="/">
        <img src={logo} alt="A reel of film" />
        <h1 className="logo" onClick={() => dispatch(hideMenu())}>
          FlickChat
        </h1>
      </a>
    </div>
  );
}
