import React from 'react';
import Logo from './Logo';
import Account from './Account';

export default function Header() {
  return (
    <div className="header" data-testid="header">
      <Logo />
      <Account />
    </div>
  );
}
