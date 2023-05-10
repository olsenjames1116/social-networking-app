import React, { useEffect } from 'react';
import { likeIcon } from '../../../../../../images';
import { db } from '../../../../../../firebase';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
  query,
  where,
  getDocs,
  deleteDoc
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeLike } from '../../../../../../redux/state/commentsSlice';
import './Likes.css';

export default function Likes({ likes, docId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.value);
  let likeIncrement = 1;

  const addLikeDoc = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/likes`);
      await addDoc(docRef, { postId: docId });
    } catch (error) {
      console.log(error);
    }
  };

  const addLikeStyle = () => {
    const commentLikeIcon = document.querySelector(`li#${docId} img.likes`);
    commentLikeIcon.classList.add('likeActive');
  };

  const removeDislikeStyle = () => {
    const commentDislikeIcon = document.querySelector(`li#${docId} img.dislikes`);
    commentDislikeIcon.classList.remove('dislikeActive');
  };

  const removeLikeStyle = () => {
    const commentLikeIcon = document.querySelector(`li#${docId} img.likes`);
    commentLikeIcon.classList.remove('likeActive');
  };

  const checkUserLikes = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/likes`);
      const docQuery = query(docRef, where('postId', '==', docId));
      const docSnap = await getDocs(docQuery);

      if (!docSnap.empty) addLikeStyle();
    } catch (error) {
      console.log(error);
    }
  };

  const updateLikes = async () => {
    try {
      const docRef = doc(db, `movies/${id}/comments/${docId}`);
      await updateDoc(docRef, { likes: likes + likeIncrement });
      const docSnap = await getDoc(docRef);
      const docObject = Object.assign({ docId: docId }, docSnap.data());

      const index = comments.findIndex((comment) => comment.docId === docId);

      dispatch(changeLike([index, docObject]));

      addLikeDoc();
      checkUserLikes();
    } catch (error) {
      console.log(error);
    }
  };

  const updateDislikes = async () => {
    const docRef = collection(db, `users/${localStorage.getItem('id')}/dislikes`);
    const docQuery = query(docRef, where('postId', '==', docId));
    const docSnap = await getDocs(docQuery);
    docSnap.forEach(async (doc) => await deleteDoc(doc.ref));

    removeDislikeStyle();
  };

  const checkIfUserHasDisliked = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/dislikes`);
      const docQuery = query(docRef, where('postId', '==', docId));
      const docSnap = await getDocs(docQuery);

      if (!docSnap.empty) {
        updateDislikes();
        likeIncrement = 2;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeLike = async () => {
    try {
      const likeDocRef = collection(db, `users/${localStorage.getItem('id')}/likes`);
      const likeDocQuery = query(likeDocRef, where('postId', '==', docId));
      const likeDocSnap = await getDocs(likeDocQuery);
      likeDocSnap.forEach(async (doc) => await deleteDoc(doc.ref));

      const commentDocRef = doc(db, `movies/${id}/comments/${docId}`);
      await updateDoc(commentDocRef, { likes: likes - 1 });
      const commentDocSnap = await getDoc(commentDocRef);
      const commentDocObject = Object.assign({ docId: docId }, commentDocSnap.data());

      const index = comments.findIndex((comment) => comment.docId === docId);

      dispatch(changeLike([index, commentDocObject]));

      removeLikeStyle();
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfUserHasLiked = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/likes`);
      const docQuery = query(docRef, where('postId', '==', docId));
      const docSnap = await getDocs(docQuery);

      if (docSnap.empty) {
        await checkIfUserHasDisliked();
        updateLikes();
      } else {
        removeLike();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUserLikes();
  }, []);

  return (
    <img
      className="likes"
      src={likeIcon}
      alt="A thumbs up icon"
      onClick={() => checkIfUserHasLiked()}
    />
  );
}

Likes.propTypes = {
  likes: PropTypes.number,
  docId: PropTypes.string
};
