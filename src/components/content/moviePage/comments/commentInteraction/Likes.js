import React, { useEffect } from 'react';
import { likeIcon } from '../../../../../images';
import { db } from '../../../../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeLike } from '../../../../../redux/state/commentsSlice';

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
    const docSnap = await getDoc(docRef);
    const docObject = Object.assign({ docId: docId }, docSnap.data());

    const index = comments.findIndex((comment) => comment.docId === docId);

    dispatch(changeLike([index, docObject]));
  };

  useEffect(() => console.log(comments), [comments]);

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
