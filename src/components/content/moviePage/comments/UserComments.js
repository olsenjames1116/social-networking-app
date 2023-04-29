import React, { useEffect } from 'react';
import { db } from '../../../../firebase';
import { collection, getDocs, listCollections } from 'firebase/firestore';

export default function UserComments() {
  const getComments = async () => {
    const docRef = collection(db, 'movies/238/comments');
    const docSnap = await getDocs(docRef);
    docSnap.forEach((doc) => console.log(doc.data()));
  };

  useEffect(() => {
    getComments();
  }, []);

  return <ul className="userComments"></ul>;
}
