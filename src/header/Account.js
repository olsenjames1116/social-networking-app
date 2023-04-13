import React from 'react';
import LogInButton from './loggedOut/LogInButton';
import { useSelector } from 'react-redux';
import UserImage from './loggedIn/UserImage';
import UserName from './loggedIn/UserName';

export default function Account() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.value);

  return (
    <div className="account">
      {!isLoggedIn && <LogInButton />}
      {isLoggedIn && <UserImage />}
      {isLoggedIn && <UserName />}
    </div>
  );
}
