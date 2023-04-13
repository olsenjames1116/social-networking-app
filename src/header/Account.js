import React from 'react';
import LogInButton from './loggedOut/LogInButton';
import { useSelector } from 'react-redux';
import UserImage from './loggedIn/UserImage';

export default function Account() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.value);

  return (
    <div className="account">
      {!isLoggedIn && <LogInButton />}
      {isLoggedIn && <UserImage />}
    </div>
  );
}
