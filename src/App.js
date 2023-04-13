import React from 'react';
import RouteSwitch from './RouteSwitch';
import Header from './header/Header';

export default function App() {
  return (
    <div className="app">
      <Header />
      <RouteSwitch />
    </div>
  );
}
