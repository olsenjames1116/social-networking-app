import React, { useEffect } from 'react';
import { arrowRightIcon } from '../../../../images';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './ArrowRight.css';

export default function ArrowRight({ clicks, incrementClicks, resetClicks, movieElements }) {
  const dispatch = useDispatch();

  const loadMovie = () => {
    movieElements.forEach((element) => {
      element.style.transform = `translateX(${-100 * clicks}%)`;
    });
  };

  useEffect(() => {
    loadMovie();

    if (clicks > movieElements.length - 1) {
      dispatch(resetClicks());
    }
  }, [clicks]);

  const slideForward = () => {
    dispatch(incrementClicks());
  };

  return (
    <img
      className="arrowRight arrow"
      src={arrowRightIcon}
      alt="An arrow icon pointing right"
      onClick={() => slideForward()}
    />
  );
}

ArrowRight.propTypes = {
  clicks: PropTypes.number,
  incrementClicks: PropTypes.func,
  resetClicks: PropTypes.func,
  movieElements: PropTypes.object
};
