import React from 'react';
import { useParams } from 'react-router-dom';
import MovieData from './movieData/MovieData';

export default function MoviePage() {
  const { id } = useParams();

  return (
    <div className="moviePage">
      <MovieData id={id} />
    </div>
  );
}
