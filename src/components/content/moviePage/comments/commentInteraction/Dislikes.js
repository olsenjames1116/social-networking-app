import React, { useEffect } from 'react';
import { dislikeIcon } from '../../../../../images';
import { useDispatch, useSelector } from 'react-redux';
import { changeLike } from '../../../../../redux/state/commentsSlice';
import PropTypes from 'prop-types';
import {
  updateDoc,
  doc,
  getDoc,
  collection,
  addDoc,
  query,
  getDocs,
  where
} from 'firebase/firestore';
import { db } from '../../../../../firebase';
import { useParams } from 'react-router-dom';

export default function Dislikes({ likes, docId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.value);

  const style = {
    height: '30px',
    width: 'auto'
  };

  const addDislikeDoc = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/dislikes`);
      await addDoc(docRef, { postId: docId });
    } catch (error) {
      console.log(error);
    }
  };

  const displayDislike = () => {
    const commentDislikeIcon = document.querySelector(`li#${docId} div.dislikes>img`);
    commentDislikeIcon.setAttribute('style', 'background-color: red; height: 30px; width: auto');
  };

  const checkUserDislikes = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/dislikes`);
      const docQuery = query(docRef, where('postId', '==', docId));
      const docSnap = await getDocs(docQuery);

      if (!docSnap.empty) displayDislike();
    } catch (error) {
      console.log(error);
    }
  };

  const updateDislikes = async () => {
    try {
      const docRef = doc(db, `movies/${id}/comments/${docId}`);
      await updateDoc(docRef, { likes: likes - 1 });
      const docSnap = await getDoc(docRef);
      const docObject = Object.assign({ docId: docId }, docSnap.data());

      const index = comments.findIndex((comment) => comment.docId === docId);

      dispatch(changeLike([index, docObject]));

      addDislikeDoc();
      checkUserDislikes();
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfUserHasDisliked = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/dislikes`);
      const docQuery = query(docRef, where('postId', '==', docId));
      const docSnap = await getDocs(docQuery);

      if (docSnap.empty) {
        updateDislikes();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUserDislikes();
  }, []);

  return (
    <div className="dislikes">
      <img
        src={dislikeIcon}
        alt="A thumbs down icon"
        style={style}
        onClick={() => checkIfUserHasDisliked()}
      />
    </div>
  );
}

Dislikes.propTypes = {
  likes: PropTypes.number,
  docId: PropTypes.string
};
