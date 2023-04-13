import React from 'react';

export default function UserName() {
  return <span className="userName">{localStorage.getItem('name')}</span>;
}
