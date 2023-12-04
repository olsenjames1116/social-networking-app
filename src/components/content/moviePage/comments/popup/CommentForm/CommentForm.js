import React from 'react';
import CharacterCount from '../CharacterCount';
import { useDispatch } from 'react-redux';
import { setCharacterCount } from '../../../../../../redux/state/characterCountSlice';
import { hidePopup } from '../../../../../../redux/state/popupSlice';
import { resetCharacterCount } from '../../../../../../redux/state/characterCountSlice';
import { db } from '../../../../../../firebase';
import { useParams } from 'react-router-dom';
import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { setComments } from '../../../../../../redux/state/commentsSlice';
import './CommentForm.css';

// Represents the form on the popup for new comments
export default function CommentForm() {
  const dispatch = useDispatch();
  const { id } = useParams();

  // Counts the number of characters the user has input and sets it in state
  const countCharacters = () => {
    const commentInput = document.querySelector('textarea#comment');
    const commentLength = commentInput.value.length;

    dispatch(setCharacterCount(commentLength));
  };

  // Reset validity for the form when the user begins typing in the textarea again
  const resetValidity = () => {
    const commentInput = document.querySelector('textarea#comment');

    commentInput.setCustomValidity('');
  };

  // Resets validity and changes the character count when the user types in the textarea
  const handleChange = () => {
    countCharacters();
    resetValidity();
  };

  /* Retrieves and formats the date for a new posted comment to allow easier manipulation when displaying 
  the date for each comment */
  const formatDate = () => {
    const dateObj = new Date();

    const month = dateObj.getMonth() < 10 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1;
    const date = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();

    const dateString = `${dateObj.getFullYear()}${month}${date}`;

    return parseInt(dateString);
  };

  // Reloads comments when a new comment has been posted to reflect what is stored
  const reloadComments = async () => {
    try {
      const docRef = collection(db, `movies/${id}/comments`);
      const docQuery = query(docRef, orderBy('timestamp', 'desc'), orderBy('likes', 'desc'));
      const docSnap = await getDocs(docQuery);
      const commentData = [];

      // Give each document a unique identifier in state from its document ID
      docSnap.forEach((doc) => {
        const docObject = Object.assign({ docId: doc.id }, doc.data());
        commentData.push(docObject);
      });

      dispatch(setComments(commentData));
    } catch (error) {
      console.log(error);
    }
  };

  // Store a new comment as a document in firestore
  const postComment = async (comment) => {
    try {
      const dateNum = formatDate();

      const data = {
        id: localStorage.getItem('id'),
        likes: 0,
        profilePicUrl: localStorage.getItem('image'),
        text: comment,
        timestamp: dateNum,
        user: localStorage.getItem('name')
      };

      const docRef = collection(db, `movies/${id}/comments`);
      await addDoc(docRef, data);

      reloadComments();
    } catch (error) {
      console.log(error);
    }
  };

  /* Clears any previous input when a comment is posted to give the user a clean slate for any 
  future comments */
  const clearInput = () => {
    const popupTextarea = document.querySelector('textarea#comment');
    popupTextarea.textContent = '';

    dispatch(resetCharacterCount());
    dispatch(hidePopup());
  };

  // Display error message when there is a validity issue
  const displayErrorMessage = () => {
    const commentInput = document.querySelector('textarea#comment');

    if (commentInput.validity.valueMissing) {
      commentInput.setCustomValidity('Please say something!');
      commentInput.reportValidity();
    }
  };

  // Validate comment input
  const validateComment = (event) => {
    event.preventDefault();

    const commentInput = document.querySelector('textarea#comment');
    const comment = commentInput.value;

    const form = document.querySelector('form');

    if (form.checkValidity()) {
      postComment(comment);
      clearInput();
    } else {
      displayErrorMessage();
    }
  };

  return (
    <form noValidate>
      <textarea
        id="comment"
        placeholder="What's on your mind?"
        rows="8"
        cols="50"
        maxLength="250"
        required
        onChange={() => handleChange()}
      />
      <CharacterCount />
      <button type="submit" onClick={(event) => validateComment(event)}>
        Post
      </button>
    </form>
  );
}
