import React from 'react';
import './Author.css';

// Represents the author credit in the footer
export default function Author() {
  return (
    <>
      <p>© 2024 James Olsen. All Rights Reserved.</p>
      <p className="author">
        Built and designed by <a href="https://github.com/olsenjames1116">olsenjames1116</a>
      </p>
    </>
  );
}
