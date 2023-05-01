import React, { useEffect } from 'react';
import { dislikeIcon } from '../../../../../images';
import { useDispatch, useSelector } from 'react-redux';
import { changeLike } from '../../../../../redux/state/commentsSlice';
import PropTypes from 'prop-types';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../firebase';
import { useParams } from 'react-router-dom';

export default function Dislikes({ likes, docId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.value);

  const style = {
    height: '30px',
    width: 'auto'
  };

  const updateLikes = async () => {
    const docRef = doc(db, `movies/${id}/comments/${docId}`);
    await updateDoc(docRef, { likes: likes - 1 });

    const index = comments.findIndex((comment) => comment.docId === docId);

    dispatch(changeLike([index, likes - 1]));
  };

  useEffect(() => console.table(comments), [comments]);

  return (
    <div className="dislikes">
      <img src={dislikeIcon} alt="A thumbs down icon" style={style} onClick={() => updateLikes()} />
    </div>
  );
}

Dislikes.propTypes = {
  likes: PropTypes.number,
  docId: PropTypes.string
};
