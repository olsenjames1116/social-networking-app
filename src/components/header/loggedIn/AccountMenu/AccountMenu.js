import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../redux/state/isLoggedInSlice';
import { hideMenu } from '../../../../redux/state/accountMenuSlice';
import './AccountMenu.css';

export default function AccountMenu() {
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logOut());

    localStorage.clear();

    dispatch(hideMenu());
  };

  return (
    <ul className="accountMenu" data-testid="accountMenu">
      <li className="inactiveItem">Preferences</li>
      <li className="inactiveItem">Help</li>
      <li className="inactiveItem">Report Issue</li>
      <li className="activeItem" onClick={() => logOutUser()}>
        Logout
      </li>
    </ul>
  );
}
