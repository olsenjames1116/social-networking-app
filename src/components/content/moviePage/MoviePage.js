import React from 'react';
import { useParams } from 'react-router-dom';
import MovieData from './movieData/MovieData';
import Comments from './comments/Comments';
import { useSelector } from 'react-redux';
import PageCover from './comments/popup/PageCover';
import Popup from './comments/popup/Popup';
import '../Content.css';

export default function MoviePage() {
  const { id } = useParams();
  const popup = useSelector((state) => state.popup.value);

  return (
    <div className="moviePage content">
      <MovieData id={id} />
      <Comments />
      {popup && <PageCover />}
      {popup && <Popup />}
    </div>
  );
}
