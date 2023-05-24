import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './components/content/home/Home/Home';
import MoviePage from './components/content/moviePage/MoviePage/MoviePage';

export default function RouteSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MoviePage />} />
      </Routes>
    </HashRouter>
  );
}
