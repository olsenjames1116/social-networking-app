import React from 'react';
import PropTypes from 'prop-types';

export default function MovieImage({ image }) {
  const style = {
    height: '200px',
    width: 'auto'
  };

  return <img style={style} src={`https://image.tmdb.org/t/p/original${image}`} />;
}

MovieImage.propTypes = {
  image: PropTypes.string
};
