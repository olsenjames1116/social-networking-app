import React from 'react';
import { signInWithGoogle } from '../../firebase';

export default function LogInButton() {
  return (
    <button type="button" onClick={() => signInWithGoogle()}>
      Log In
    </button>
  );
}
