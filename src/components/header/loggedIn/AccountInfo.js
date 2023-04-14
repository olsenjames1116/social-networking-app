import React from 'react';
import UserImage from './UserImage';
import UserName from './UserName';
import AccountMenuIcon from './AccountMenuIcon';
import AccountMenu from './AccountMenu';
import { useSelector } from 'react-redux';

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
