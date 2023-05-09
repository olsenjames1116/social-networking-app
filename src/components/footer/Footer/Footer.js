import React from 'react';
import Author from '../Author/Author';
import Sources from '../Sources/Sources';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <Author />
      <Sources />
    </div>
  );
}
