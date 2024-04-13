import React from 'react';
import { useParams } from 'react-router-dom';
import MovieData from '../MovieData/MovieData';
import Comments from '../Comments/Comments';
import { useSelector } from 'react-redux';
import PageCover from '../PageCover/PageCover';
import Popup from '../Popup/Popup';
import '../Content/Content.css';
import './MoviePage.css';
import { useDispatch } from 'react-redux';
import { hideMenu } from '../../redux/state/accountMenuSlice';

// Represents the movie page that is routed to from one of the movie cards on the home page
export default function MoviePage() {
  const { id } = useParams();
  const popup = useSelector((state) => state.popup.value);
  const dispatch = useDispatch();

  return (
    <div className="moviePage content" onClick={() => dispatch(hideMenu())}>
      <MovieData id={id} />
      <Comments />
      {popup && <PageCover />}
      {popup && <Popup />}
    </div>
  );
}
