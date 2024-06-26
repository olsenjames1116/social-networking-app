import React, { useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import UserComment from '../UserComment/UserComment';
import { useDispatch, useSelector } from 'react-redux';
import { setComments } from '../../redux/state/commentsSlice';
import { useParams } from 'react-router-dom';
import './UserComments.css';

// Represents the comment section on each movie page
export default function UserComments() {
  const comments = useSelector((state) => state.comments.value);
  const dispatch = useDispatch();
  const { id } = useParams();

  // Get all comments associated with a movie to be displayed
  const getComments = async () => {
    try {
      const docRef = collection(db, `movies/${id}/comments`);
      const docQuery = query(docRef, orderBy('timestamp', 'desc'), orderBy('likes', 'desc'));
      const docSnap = await getDocs(docQuery);
      const commentData = [];

      // Give each document a unique identifier for the document ID
      docSnap.forEach((doc) => {
        const docObject = Object.assign({ docId: doc.id }, doc.data());
        commentData.push(docObject);
      });

      dispatch(setComments(commentData));
    } catch (error) {
      console.log(error);
    }
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
