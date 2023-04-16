import React from 'react';
import RouteSwitch from './RouteSwitch';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <div className="app" data-testid="app">
      <Provider store={store}>
        <Header />
        <RouteSwitch />
        <Footer />
      </Provider>
    </div>
  );
}
