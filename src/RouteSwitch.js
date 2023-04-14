import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/content/home/Home';

export default function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
