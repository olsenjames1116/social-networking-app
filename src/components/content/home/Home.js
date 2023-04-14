import React from 'react';
import TopMovies from './TopMovies';
import MostPopular from './MostPopular';

export default function Home() {
  return (
    <div className="home">
      Home <TopMovies />
      <MostPopular />
    </div>
  );
}
