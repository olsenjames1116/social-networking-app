import React from 'react';
import { arrowRightIcon } from '../../../../images';
import PropTypes from 'prop-types';

export default function ArrowRight({ clicks }) {
  const slideForward = () => {};

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
  clicks: PropTypes.number
};
