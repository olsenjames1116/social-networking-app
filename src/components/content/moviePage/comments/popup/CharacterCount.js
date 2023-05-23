import React from 'react';
import { useSelector } from 'react-redux';

// Represents the character count that appears on the new comment popup
export default function CharacterCount() {
  const characterCount = useSelector((state) => state.characterCount.value);

  // Formats the character count to show the user how many characters they have left to enter
  const formatCharacterCount = () => {
    return `${characterCount}/250`;
  };

  return <p>{formatCharacterCount()}</p>;
}
