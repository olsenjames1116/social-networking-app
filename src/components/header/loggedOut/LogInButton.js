import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../../firebase';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/state/isLoggedInSlice';
import { db } from '../../../firebase';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';

export default function LogInButton() {
  const dispatch = useDispatch();

  const validateUser = async () => {
    try {
      const docRef = collection(db, 'users');
      const docQuery = query(docRef, where('id', '==', localStorage.getItem('id')));
      const docSnap = await getDocs(docQuery);

      if (docSnap.empty) storeNewUser();
    } catch (error) {
      console.log(error);
    }
  };

  const storeNewUser = async () => {
    console.log('new user');
    try {
      const data = {
        id: localStorage.getItem('id'),
        name: localStorage.getItem('name')
      };

      const docRef = collection(db, 'users');
      await addDoc(docRef, data);
    } catch (error) {
      console.log(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, provider);

      localStorage.setItem('id', response.user.uid);
      localStorage.setItem('name', response.user.displayName);
      localStorage.setItem('image', response.user.photoURL);

      validateUser();

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
