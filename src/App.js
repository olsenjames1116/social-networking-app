import React from 'react';
import RouteSwitch from './RouteSwitch';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <RouteSwitch />
      <Footer />
    </div>
  );
}
