import React, { useEffect } from 'react';
import { likeIcon } from '../../../../../images';
import { db } from '../../../../../firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addLike } from '../../../../../redux/state/commentsSlice';

export default function Likes({ likes, docId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.value);

  const style = {
    height: '30px',
    width: 'auto'
  };

  const updateLikes = async () => {
    const docRef = doc(db, `movies/${id}/comments/${docId}`);
    await updateDoc(docRef, { likes: likes + 1 });

    const index = comments.findIndex((comment) => comment.docId === docId);

    dispatch(addLike([index, likes + 1]));
  };

  useEffect(() => console.log(likes), [likes]);

  return (
    <div className="likes">
      <img src={likeIcon} alt="A thumbs up icon" style={style} onClick={() => updateLikes()} />
    </div>
  );
}

Likes.propTypes = {
  likes: PropTypes.number,
  docId: PropTypes.string
};
