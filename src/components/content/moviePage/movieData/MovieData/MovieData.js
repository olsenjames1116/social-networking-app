import React, { useEffect } from 'react';
import MovieImage from '../../../movie/MovieImage/MovieImage';
import PropTypes from 'prop-types';
import Title from '../../../movie/Title/Title';
import Score from '../../../movie/Score/Score';
import Runtime from '../Runtime';
import ReleaseDate from '../ReleaseDate';
import Overview from '../Overview/Overview';
import Genre from '../Genre/Genre';
import Languages from '../Languages/Languages';
import { useDispatch, useSelector } from 'react-redux';
import { setMovie, clearMovie } from '../../../../../redux/state/movieSlice';
import './MovieData.css';

export default function MovieData({ id }) {
  const movie = useSelector((state) => state.movie.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMovie());

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=4f9b51028fe2871ccd482413fd149522`
        );

        const data = await response.json();

        dispatch(setMovie(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movie">
      <MovieImage image={movie.poster_path} />
      <Title title={movie.title} />
      <Score score={movie.vote_average} count={movie.vote_count} />
      <div className="timeDate">
        <Runtime runtime={movie.runtime} />
        {' | '}
        <ReleaseDate date={movie.release_date} />
      </div>
      <Overview overview={movie.overview} />
      <Genre genres={movie.genres} />
      <Languages languages={movie.spoken_languages} />
    </div>
  );
}

MovieData.propTypes = {
  id: PropTypes.string
};
