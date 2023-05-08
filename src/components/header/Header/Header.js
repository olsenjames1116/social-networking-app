import React from 'react';
import Logo from '../Logo';
import Account from '../Account';
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Account />
    </div>
  );
}
