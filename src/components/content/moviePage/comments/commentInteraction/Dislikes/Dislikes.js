import React, { useEffect } from 'react';
import { dislikeIcon } from '../../../../../../images';
import { useDispatch, useSelector } from 'react-redux';
import { changeLike } from '../../../../../../redux/state/commentsSlice';
import PropTypes from 'prop-types';
import {
  updateDoc,
  doc,
  getDoc,
  collection,
  addDoc,
  query,
  getDocs,
  where,
  deleteDoc
} from 'firebase/firestore';
import { db } from '../../../../../../firebase';
import { useParams } from 'react-router-dom';
import './Dislikes.css';

// Represents the dislike icon for each comment
export default function Dislikes({ likes, docId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.value);
  let likeIncrement = 1;

  // Store a new document for a dislike from the user
  const addDislikeDoc = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/dislikes`);
      await addDoc(docRef, { postId: docId });
    } catch (error) {
      console.log(error);
    }
  };

  // Give style to the dislike icon so the user can see what they have interacted with
  const addDislikeStyle = () => {
    const comment = document.getElementById(`${docId}`);
    const commentDislikeElement = comment.childNodes[3].childNodes[2];
    commentDislikeElement.classList.add('dislikeActive');
  };

  /* Remove style from like icon when the dislike icon is clicked so the user can see their like
  has been removed */
  const removeLikeStyle = () => {
    const comment = document.getElementById(`${docId}`);
    const commentLikeElement = comment.childNodes[3].childNodes[0];
    commentLikeElement.classList.remove('likeActive');
  };

  /* Remove style from dislike icon when the same dislike has been clicked again to show the user
  that dislike has been removed */
  const removeDislikeStyle = () => {
    const comment = document.getElementById(`${docId}`);
    const commentDislikeElement = comment.childNodes[3].childNodes[2];
    commentDislikeElement.classList.remove('dislikeActive');
  };

  // Check if the user has any dislikes
  const checkUserDislikes = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/dislikes`);
      const docQuery = query(docRef, where('postId', '==', docId));
      const docSnap = await getDocs(docQuery);

      // Add style to any previously stored dislikes
      if (!docSnap.empty) addDislikeStyle();
    } catch (error) {
      console.log(error);
    }
  };

  // Change the total number of likes on the like count for a comment when the dislike icon is clicked
  const updateDislikes = async () => {
    try {
      const docRef = doc(db, `movies/${id}/comments/${docId}`);
      await updateDoc(docRef, { likes: likes - likeIncrement });
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

  // Remove a like document from firestore when a user has clicked the dislike icon for a comment
  const updateLikes = async () => {
    const docRef = collection(db, `users/${localStorage.getItem('id')}/likes`);
    const docQuery = query(docRef, where('postId', '==', docId));
    const docSnap = await getDocs(docQuery);
    docSnap.forEach(async (doc) => await deleteDoc(doc.ref));

    removeLikeStyle();
  };

  /* Check if a user has liked a post, if so the document needs to be deleted and the likes 
  need to be decremented by more than one to balance out a like with a dislike */
  const checkIfUserHasLiked = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/likes`);
      const docQuery = query(docRef, where('postId', '==', docId));
      const docSnap = await getDocs(docQuery);

      if (!docSnap.empty) {
        updateLikes();
        likeIncrement = 2;
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* Remove a dislike's style, delete the document associated with the dislike and update the 
  number of likes on a comment when the same dislike has been clicked again */
  const removeDislike = async () => {
    try {
      const dislikeDocRef = collection(db, `users/${localStorage.getItem('id')}/dislikes`);
      const dislikeDocQuery = query(dislikeDocRef, where('postId', '==', docId));
      const dislikeDocSnap = await getDocs(dislikeDocQuery);
      dislikeDocSnap.forEach(async (doc) => await deleteDoc(doc.ref));

      const commentDocRef = doc(db, `movies/${id}/comments/${docId}`);
      await updateDoc(commentDocRef, { likes: likes + 1 });
      const commentDocSnap = await getDoc(commentDocRef);
      const commentDocObject = Object.assign({ docId: docId }, commentDocSnap.data());

      const index = comments.findIndex((comment) => comment.docId === docId);

      dispatch(changeLike([index, commentDocObject]));

      removeDislikeStyle();
    } catch (error) {
      console.log(error);
    }
  };

  // Check if a user has previously disliked the comment
  const checkIfUserHasDisliked = async () => {
    try {
      const docRef = collection(db, `users/${localStorage.getItem('id')}/dislikes`);
      const docQuery = query(docRef, where('postId', '==', docId));
      const docSnap = await getDocs(docQuery);

      if (docSnap.empty) {
        await checkIfUserHasLiked();
        updateDislikes();
      } else {
        removeDislike();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUserDislikes();
  }, []);

  return (
    <img
      className="dislikes"
      src={dislikeIcon}
      alt="A thumbs down icon"
      onClick={() => checkIfUserHasDisliked()}
    />
  );
}

Dislikes.propTypes = {
  likes: PropTypes.number,
  docId: PropTypes.string
};
