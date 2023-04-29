import React from 'react';
import CharacterCount from './CharacterCount';
import { useDispatch } from 'react-redux';
import { setCharacterCount } from '../../../../../redux/state/characterCountSlice';
import { hidePopup } from '../../../../../redux/state/popupSlice';

export default function CommentForm() {
  const dispatch = useDispatch();

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
      console.log(comment);
      dispatch(hidePopup());
      alert('Your comment has been posted!');
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
