import React from 'react';

export default function UserName() {
  return <li className="userName">{localStorage.getItem('name')}</li>;
}
