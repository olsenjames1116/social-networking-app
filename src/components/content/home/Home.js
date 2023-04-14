import React from 'react';
import TopMovies from './TopMovies';
import MostPopular from './MostPopular';
import Upcoming from './Upcoming';

export default function Home() {
  return (
    <div className="home">
      Home
      <TopMovies />
      <MostPopular />
      <Upcoming />
    </div>
  );
}
