import React, { useEffect } from 'react';
import { likeIcon } from '../../images';
import { db } from '../../firebase';
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
import { changeLike } from '../../redux/state/commentsSlice';
import './Likes.css';

// Represents the like icon for each comment
export default function Likes({ likes, docId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.value);
  let likeIncrement = 1;

  // Store a new document for a like from the user
  const addLikeDoc = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/likes`);
      await addDoc(docRef, { postId: docId });
    } catch (error) {
      console.log(error);
    }
  };

  // Give style to the like icon so the user can see what they have interacted with
  const addLikeStyle = () => {
    const comment = document.getElementById(`${docId}`);
    const commentLikeElement = comment.childNodes[3].childNodes[0];
    commentLikeElement.classList.add('likeActive');
  };

  /* Remove style from dislike icon when the like icon is clicked so the user can see their dislike
  has been removed */
  const removeDislikeStyle = () => {
    const comment = document.getElementById(`${docId}`);
    const commentDislikeElement = comment.childNodes[3].childNodes[2];
    commentDislikeElement.classList.remove('dislikeActive');
  };

  /* Remove style from like icon when the same like has been clicked again to show the user
  that like has been removed */
  const removeLikeStyle = () => {
    const comment = document.getElementById(`${docId}`);
    const commentLikeElement = comment.childNodes[3].childNodes[0];
    commentLikeElement.classList.remove('likeActive');
  };

  // Check if the user has any likes
  const checkUserLikes = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/likes`);
      const docQuery = query(docRef, where('postId', '==', docId));
      const docSnap = await getDocs(docQuery);

      // Add style to any previously stored likes
      if (!docSnap.empty) addLikeStyle();
    } catch (error) {
      console.log(error);
    }
  };

  // Change the total number of likes on the like count for a comment when the like icon is clicked
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

  // Remove a dislike document from firestore when a user has clicked the like icon for a comment
  const updateDislikes = async () => {
    const docRef = collection(db, `users/${localStorage.getItem('id')}/dislikes`);
    const docQuery = query(docRef, where('postId', '==', docId));
    const docSnap = await getDocs(docQuery);
    docSnap.forEach(async (doc) => await deleteDoc(doc.ref));

    removeDislikeStyle();
  };

  /* Check if a user has disliked a post, if so the document needs to be deleted and the likes 
  need to be incremented by more than one to balance out a dislike with a like */
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

  /* Remove a like's style, delete the document associated with the like and update the 
  number of likes on a comment when the same like has been clicked again */
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

  // Check if a user has previously liked the comment
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
