import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import MoviePage from './components/MoviePage/MoviePage';

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
