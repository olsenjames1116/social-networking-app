import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUpcoming } from '../../../redux/state/upcomingSlice';
import Movie from './movieData/Movie';
import { Link } from 'react-router-dom';

export default function Upcoming() {
  const upcoming = useSelector((state) => state.upcoming.value);
  const dispatch = useDispatch();

  const sortResults = (results) => {
    results.sort((a, b) => {
      if (a.release_date > b.release_date) return -1;
      return 1;
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming?api_key=4f9b51028fe2871ccd482413fd149522'
        );
        const data = await response.json();

        sortResults(data.results);

        console.log(data.results);

        dispatch(setUpcoming(data.results.slice(0, 10)));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="upcoming">
      <h2>Upcoming</h2>
      <ul className="upcoming">
        {upcoming.map((movie) => {
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
