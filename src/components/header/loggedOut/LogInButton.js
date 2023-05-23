import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../../firebase';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/state/isLoggedInSlice';
import { db } from '../../../firebase';
import { setDoc, collection, getDoc, doc } from 'firebase/firestore';
import './LogInButton.css';

// Represents the login button that is displayed if a user is logged out
export default function LogInButton() {
  const dispatch = useDispatch();

  // Checks if the user is a new user. Saves their info if so
  const validateNewUser = async () => {
    try {
      const docRef = doc(db, `users/${localStorage.getItem('id')}`);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) storeNewUser();
    } catch (error) {
      console.log(error);
    }
  };

  // Stores a user's info in firebase if they are a new user
  const storeNewUser = async () => {
    console.log('new user');
    try {
      const data = {
        name: localStorage.getItem('name')
      };

      const docRef = collection(db, 'users');
      await setDoc(doc(docRef, localStorage.getItem('id')), data);
    } catch (error) {
      console.log(error);
    }
  };

  // Redirects the user to Google Auth to login
  const signInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);

      localStorage.setItem('id', response.user.uid);
      localStorage.setItem('name', response.user.displayName);
      localStorage.setItem('image', response.user.photoURL);

      validateNewUser();

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
