import React from 'react';
import { useSelector } from 'react-redux';

export default function CharacterCount() {
  const characterCount = useSelector((state) => state.characterCount.value);

  const formatCharacterCount = () => {
    return `${characterCount}/250`;
  };

  return <p>{formatCharacterCount()}</p>;
}
