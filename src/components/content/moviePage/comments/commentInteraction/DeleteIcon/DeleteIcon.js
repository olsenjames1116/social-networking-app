import React from 'react';
import { deleteIcon } from '../../../../../../images';
import PropTypes from 'prop-types';
import { deleteDoc, doc, collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../../../../../firebase';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setComments } from '../../../../../../redux/state/commentsSlice';
import './DeleteIcon.css';

// Represents that delete icon in each of the user's comments
export default function DeleteIcon({ docId }) {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Retrieve and reload comments then store them in state
  // Allows for realtime updates in state to reflect storage
  const reloadComments = async () => {
    try {
      const docRef = collection(db, `movies/${id}/comments`);
      const docQuery = query(docRef, orderBy('timestamp', 'desc'), orderBy('likes', 'desc'));
      const docSnap = await getDocs(docQuery);
      const commentData = [];

      // Give each comment a document ID in state to access each object easily
      docSnap.forEach((doc) => {
        const docObject = Object.assign({ docId: doc.id }, doc.data());
        commentData.push(docObject);
      });

      dispatch(setComments(commentData));
    } catch (error) {
      console.log(error);
    }
  };

  // Delete a comment from firestore when the delete icon is clicked
  const deleteComment = async () => {
    const commentRef = doc(db, `movies/${id}/comments/${docId}`);
    await deleteDoc(commentRef);

    reloadComments();
  };

  return (
    <img
      className="delete"
      src={deleteIcon}
      alt="A trash can icon"
      onClick={() => deleteComment()}
    />
  );
}

DeleteIcon.propTypes = {
  docId: PropTypes.string
};
