import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/content/home/Home/Home';
import MoviePage from './components/content/moviePage/MoviePage/MoviePage';

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}
