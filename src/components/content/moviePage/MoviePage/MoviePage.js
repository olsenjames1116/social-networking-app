import React from 'react';
import { useParams } from 'react-router-dom';
import MovieData from '../movieData/MovieData/MovieData';
import Comments from '../comments/Comments/Comments';
import { useSelector } from 'react-redux';
import PageCover from '../comments/popup/PageCover/PageCover';
import Popup from '../comments/popup/Popup/Popup';
import '../../Content.css';
import './MoviePage.css';
import { useDispatch } from 'react-redux';
import { hideMenu } from '../../../../redux/state/accountMenuSlice';

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
