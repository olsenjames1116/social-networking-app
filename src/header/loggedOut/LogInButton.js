import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/state/isLoggedInSlice';

export default function LogInButton() {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);

      localStorage.setItem('id', response.user.uid);
      localStorage.setItem('name', response.user.displayName);
      localStorage.setItem('image', response.user.photoURL);

      dispatch(logIn());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button type="button" onClick={() => signInWithGoogle()}>
      Log In
    </button>
  );
}
