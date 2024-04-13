import React from 'react';
import Logo from '../Logo/Logo';
import Account from '../Account/Account';
import './Header.css';

// Represents the header at the top of every page
export default function Header() {
  return (
    <div className="header">
      <Logo />
      <Account />
    </div>
  );
}
