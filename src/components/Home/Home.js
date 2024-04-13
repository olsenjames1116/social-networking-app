import React from 'react';
import TopMovies from '../TopMovies/TopMovies';
import MostPopular from '../MostPopular/MostPopular';
import Trending from '../Trending/Trending';
import '../Content/Content.css';
import './Home.css';
import { useDispatch } from 'react-redux';
import { hideMenu } from '../../redux/state/accountMenuSlice';

// Represents the homepage
export default function Home() {
  const dispatch = useDispatch();

  return (
    <div className="home content" onClick={() => dispatch(hideMenu())}>
      <TopMovies />
      <MostPopular />
      <Trending />
    </div>
  );
}
