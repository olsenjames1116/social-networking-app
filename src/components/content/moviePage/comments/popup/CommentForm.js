import React from 'react';
import CharacterCount from './CharacterCount';
import { useDispatch } from 'react-redux';
import { setCharacterCount } from '../../../../../redux/state/characterCountSlice';

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

  return (
    <form>
      <textarea
        id="comment"
        placeholder="What's on your mind?"
        rows="8"
        cols="50"
        style={style}
        onChange={() => countCharacters()}
      />
      <CharacterCount />
    </form>
  );
}
