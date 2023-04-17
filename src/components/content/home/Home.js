import React from 'react';
import TopMovies from './TopMovies';
import MostPopular from './MostPopular';
import Trending from './Trending';

export default function Home() {
  return (
    <div className="home">
      Home
      <TopMovies />
      <MostPopular />
      <Trending />
    </div>
  );
}
