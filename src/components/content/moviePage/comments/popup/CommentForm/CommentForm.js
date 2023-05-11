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

export default function CommentForm() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const style = {
    resize: 'none'
  };

  const countCharacters = () => {
    const commentInput = document.querySelector('textarea#comment');
    const commentLength = commentInput.value.length;

    dispatch(setCharacterCount(commentLength));
  };

  const resetValidity = () => {
    const commentInput = document.querySelector('textarea#comment');

    commentInput.setCustomValidity('');
  };

  const handleChange = () => {
    countCharacters();
    resetValidity();
  };

  const formatDate = () => {
    const dateObj = new Date();

    const month = dateObj.getMonth() < 10 ? `0${dateObj.getMonth() + 1}` : dateObj.getMonth() + 1;
    const date = dateObj.getDate() < 10 ? `0${dateObj.getDate()}` : dateObj.getDate();

    const dateString = `${dateObj.getFullYear()}${month}${date}`;

    return parseInt(dateString);
  };

  const reloadComments = async () => {
    try {
      const docRef = collection(db, `movies/${id}/comments`);
      const docQuery = query(docRef, orderBy('timestamp', 'desc'), orderBy('likes', 'desc'));
      const docSnap = await getDocs(docQuery);
      const commentData = [];

      docSnap.forEach((doc) => {
        const docObject = Object.assign({ docId: doc.id }, doc.data());
        commentData.push(docObject);
      });

      dispatch(setComments(commentData));
    } catch (error) {
      console.log(error);
    }
  };

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

  const clearInput = () => {
    const popupTextarea = document.querySelector('textarea#comment');
    popupTextarea.textContent = '';

    dispatch(resetCharacterCount());
    dispatch(hidePopup());
  };

  const displayErrorMessage = () => {
    console.log('invalid input');
    const commentInput = document.querySelector('textarea#comment');

    if (commentInput.validity.valueMissing) {
      commentInput.setCustomValidity('Please say something!');
      commentInput.reportValidity();
    }
  };

  const validateComment = (event) => {
    event.preventDefault();

    const commentInput = document.querySelector('textarea#comment');
    const comment = commentInput.value;

    const form = document.querySelector('form');

    if (form.checkValidity()) {
      // console.log(comment);
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
        style={style}
        onChange={() => handleChange()}
      />
      <CharacterCount />
      <button type="submit" onClick={(event) => validateComment(event)}>
        Post
      </button>
    </form>
  );
}
