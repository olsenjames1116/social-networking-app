import React from 'react';
import RouteSwitch from '../RouteSwitch';
import Header from '../components/header/Header/Header';
import Footer from '../components/footer/Footer/Footer';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/state/isLoggedInSlice';
import './App.css';

export default function App() {
  const dispatch = useDispatch();

  // Checks if a user's info is stored already so the user will stay logged in
  const checkLogIn = () => {
    localStorage.getItem('id') && dispatch(logIn());
  };

  return (
    <div className="app">
      {checkLogIn()}
      <Header />
      <RouteSwitch />
      <Footer />
    </div>
  );
}
