import React, { useEffect } from 'react';
import { arrowRightIcon } from '../../../../images';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './ArrowRight.css';

export default function ArrowRight({ clicks, incrementClicks, resetClicks, movieElements }) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(clicks);
    loadMovie();

    if (clicks > 2) {
      dispatch(resetClicks());
    }
  }, [clicks]);

  const loadMovie = () => {
    movieElements.forEach((element) => {
      element.style.transform = `translateX(${-183.32 * clicks}px)`;
    });
  };

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
