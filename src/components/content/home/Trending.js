import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTrending } from '../../../redux/state/trendingSlice';
import Movie from '../movie/Movie';
import { Link } from 'react-router-dom';

export default function Trending() {
  const trending = useSelector((state) => state.trending.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/trending/movie/day?api_key=4f9b51028fe2871ccd482413fd149522'
        );
        const data = await response.json();

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
            <Link key={movie.id} to={`/${movie.id}`}>
              <Movie key={movie.id} movie={movie} />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
