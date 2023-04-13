import React from 'react';
import { menuIcon } from '../../images/index';
import { useDispatch } from 'react-redux';
import { displayMenu } from '../../redux/state/accountMenuSlice';

export default function AccountMenuIcon() {
  const dispatch = useDispatch();

  const style = {
    width: 'auto',
    height: '25px'
  };

  return (
    <li className="accountMenuIcon">
      <img style={style} src={menuIcon} alt="A menu icon" onClick={() => dispatch(displayMenu())} />
    </li>
  );
}
