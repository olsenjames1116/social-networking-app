import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/state/isLoggedInSlice';

export default function AccountMenu() {
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logOut());

    localStorage.clear();
  };

  return (
    <ul className="accountMenu" data-testid="accountMenu">
      <li>Preferences</li>
      <li>Help</li>
      <li>Report Issue</li>
      <li onClick={() => logOutUser()}>Logout</li>
    </ul>
  );
}
