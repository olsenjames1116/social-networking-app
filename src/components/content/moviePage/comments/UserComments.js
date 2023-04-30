import React, { useEffect } from 'react';
import { db } from '../../../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import UserComment from './UserComment';
import { useDispatch, useSelector } from 'react-redux';
import { setComments } from '../../../../redux/state/commentsSlice';
import { useParams } from 'react-router-dom';

export default function UserComments() {
  const comments = useSelector((state) => state.comments.value);
  const dispatch = useDispatch();
  const { id } = useParams();

  const getComments = async () => {
    const docRef = collection(db, `movies/${id}/comments`);
    const docSnap = await getDocs(docRef);
    const commentData = [];

    docSnap.forEach((doc) => commentData.push(doc.data()));

    dispatch(setComments(commentData));
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <ul className="userComments">
      {comments.map((comment) => (
        <UserComment key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
