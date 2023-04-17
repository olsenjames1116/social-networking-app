import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrending } from '../../../redux/state/trendingSlice';
import Movie from './movieData/Movie';
import { Link } from 'react-router-dom';

export default function Trending() {
  const trending = useSelector((state) => state.trending.value);
  const dispatch = useDispatch();

  // const sortResults = (results) => {
  //   results.sort((a, b) => {
  //     if (a.release_date > b.release_date) return -1;
  //     return 1;
  //   });
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=4f9b51028fe2871ccd482413fd149522'
        );
        const data = await response.json();

        // sortResults(data.results);

        console.log(data.results);

        dispatch(setTrending(data.results.slice(0, 10)));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="trending">
      <h2>Trending</h2>
      <ul className="trending">
        {trending.map((movie) => {
          return (
            <Link key={movie.id} to={`/trending/${movie.id}`}>
              <Movie key={movie.id} movie={movie} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
