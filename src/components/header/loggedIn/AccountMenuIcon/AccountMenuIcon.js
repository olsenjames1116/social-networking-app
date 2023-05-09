import React from 'react';
import { menuIcon } from '../../../../images/index';
import { useDispatch } from 'react-redux';
import { displayMenu } from '../../../../redux/state/accountMenuSlice';
import './AccountMenuIcon.css';

export default function AccountMenuIcon() {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.target.classList.toggle('clicked');

    dispatch(displayMenu());
  };

  return (
    <li className="accountMenuIcon">
      <img src={menuIcon} alt="A menu icon" onClick={(event) => handleClick(event)} />
    </li>
  );
}
