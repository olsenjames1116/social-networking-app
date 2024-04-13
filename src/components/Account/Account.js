import React from 'react';
import LogInButton from '../LogInButton/LogInButton';
import { useSelector } from 'react-redux';
import AccountInfo from '../AccountInfo/AccountInfo';
import './Account.css';

/* Represents the account section of the header. If a user is not logged in, it will display
a login button. If they are logged in it will display the account info */
export default function Account() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn.value);

  return (
    <div className="account">
      {!isLoggedIn && <LogInButton />}
      {isLoggedIn && <AccountInfo />}
    </div>
  );
}
