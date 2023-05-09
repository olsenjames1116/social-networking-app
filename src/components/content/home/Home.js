import React from 'react';
import TopMovies from './TopMovies';
import MostPopular from './MostPopular';
import Trending from './Trending';
import '../Content.css';

export default function Home() {
  return (
    <div className="home content">
      <TopMovies />
      <MostPopular />
      <Trending />
    </div>
  );
}
