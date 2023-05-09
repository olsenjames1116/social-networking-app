import React from 'react';
import UserImage from '../UserImage/UserImage';
import UserName from '../UserName';
import AccountMenuIcon from '../AccountMenuIcon/AccountMenuIcon';
import AccountMenu from '../AccountMenu/AccountMenu';
import { useSelector } from 'react-redux';
import './AccountInfo.css';

export default function AccountInfo() {
  const accountMenu = useSelector((state) => state.accountMenu.display);

  return (
    <ul className="accountInfo">
      <UserImage />
      <UserName />
      <AccountMenuIcon />
      {accountMenu && <AccountMenu />}
    </ul>
  );
}
