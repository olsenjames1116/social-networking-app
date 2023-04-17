import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MovieData from './movieData/MovieData';

export default function MoviePage() {
  const { id, category } = useParams();
  let movie;

  const findMovie = (movies) => {
    movie = movies.find((movie) => movie.id === Number(id));
    console.log(movie);
  };

  if (category === 'most_popular') {
    const mostPopular = useSelector((state) => state.mostPopular.value);
    console.log(mostPopular);
    findMovie(mostPopular);
  } else if (category === 'top_rated') {
    const topMovies = useSelector((state) => state.topMovies.value);
    findMovie(topMovies);
  } else {
    const trending = useSelector((state) => state.trending.value);
    findMovie(trending);
  }

  return (
    <div className="moviePage">
      <MovieData movie={movie} />
    </div>
  );
}
