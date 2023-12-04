import React, { useEffect } from 'react';
import { arrowLeftIcon } from '../../../../images';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import './ArrowLeft.css';

// Represents the arroww pointing left next to the movies on the homepage
export default function ArrowLeft({ clicks, decrementClicks, resetClicks, movieElements }) {
  const dispatch = useDispatch();

  // Slides movies to the left
  const loadMovie = () => {
    movieElements.forEach((element) => {
      element.style.transform = `translateX(${100 * clicks}%)`;
    });
  };

  useEffect(() => {
    loadMovie();

    // Reset the slider if the user attempts to slide left more than allowed
    if (clicks < 0) {
      dispatch(resetClicks());
    }
  }, [clicks]);

  // Reached when the arrow is clicked
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
