import React from 'react';
import { useParams } from 'react-router-dom';
import MovieData from './movieData/MovieData';
import Comments from './comments/Comments';

export default function MoviePage() {
  const { id } = useParams();

  return (
    <div className="moviePage">
      <MovieData id={id} />
      <Comments />
    </div>
  );
}
