import React, { useEffect } from 'react';
import { arrowLeftIcon } from '../../../../images';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './ArrowLeft.css';

export default function ArrowLeft({ clicks, decrementClicks, resetClicks, movieElements }) {
  const dispatch = useDispatch();

  const loadMovie = () => {
    movieElements.forEach((element) => {
      element.style.transform = `translateX(${100 * clicks}%)`;
    });
  };

  useEffect(() => {
    loadMovie();

    if (clicks < 0) {
      dispatch(resetClicks());
    }
  }, [clicks]);

  const slideBackward = () => {
    dispatch(decrementClicks());
  };

  return (
    <img
      className="arrowLeft arrow"
      src={arrowLeftIcon}
      alt="An arrow icon pointing left"
      onClick={() => slideBackward()}
    />
  );
}

ArrowLeft.propTypes = {
  clicks: PropTypes.number,
  decrementClicks: PropTypes.func,
  resetClicks: PropTypes.func,
  movieElements: PropTypes.object
};
