import React, { useEffect } from 'react';
import { likeIcon } from '../../../../../images';
import { db } from '../../../../../firebase';
import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
  query,
  where,
  getDocs
} from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeLike } from '../../../../../redux/state/commentsSlice';

export default function Likes({ likes, docId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.value);

  const style = {
    height: '30px',
    width: 'auto'
  };

  const addLikeDoc = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/likes`);
      await addDoc(docRef, { postId: docId });
    } catch (error) {
      console.log(error);
    }
  };

  const displayLike = () => {
    const commentLikeIcon = document.querySelector(`li#${docId} div.likes>img`);
    commentLikeIcon.setAttribute('style', 'background-color: green; height: 30px; width: auto');
  };

  const checkUserLikes = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/likes`);
      const docQuery = query(docRef, where('postId', '==', docId));
      const docSnap = await getDocs(docQuery);

      if (!docSnap.empty) displayLike();
    } catch (error) {
      console.log(error);
    }
  };

  const updateLikes = async () => {
    try {
      const docRef = doc(db, `movies/${id}/comments/${docId}`);
      await updateDoc(docRef, { likes: likes + 1 });
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

  const checkIfUserHasLiked = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/likes`);
      const docQuery = query(docRef, where('postId', '==', docId));
      const docSnap = await getDocs(docQuery);

      if (docSnap.empty) {
        updateLikes();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUserLikes();
  }, []);

  return (
    <div className="likes">
      <img
        src={likeIcon}
        alt="A thumbs up icon"
        style={style}
        onClick={() => checkIfUserHasLiked()}
      />
    </div>
  );
}

Likes.propTypes = {
  likes: PropTypes.number,
  docId: PropTypes.string
};
