import React from 'react';
import { likeIcon } from '../../../../../images';
import { db } from '../../../../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Likes({ likes, docId }) {
  const { id } = useParams();

  const style = {
    height: '30px',
    width: 'auto'
  };

  const addLike = async () => {
    const docRef = doc(db, `movies/${id}/comments/${docId}`);
    await updateDoc(docRef, { likes: 4 });
  };

  return (
    <div className="likes">
      <img src={likeIcon} alt="A thumbs up icon" style={style} onClick={() => addLike()} />
    </div>
  );
}

Likes.propTypes = {
  likes: PropTypes.number,
  docId: PropTypes.string
};
