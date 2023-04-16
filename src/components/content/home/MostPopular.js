import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMostPopular } from '../../../redux/state/mostPopularSlice';
import Movie from './movieData/Movie';
import { Link } from 'react-router-dom';

export default function MostPopular() {
  const mostPopular = useSelector((state) => state.mostPopular.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular?api_key=4f9b51028fe2871ccd482413fd149522'
        );
        const data = await response.json();

        console.log(data.results);

        dispatch(setMostPopular(data.results.slice(0, 10)));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mostPopular">
      <h2>Most Popular</h2>
      <ul className="mostPopular">
        {mostPopular.map((movie) => {
          return (
            <Link key={movie.id} to={`/${movie.id}`}>
              <Movie movie={movie} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
