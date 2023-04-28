import React from 'react';
import PropTypes from 'prop-types';

export default function Runtime({ runtime }) {
  const formatRuntime = () => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  return <span>{formatRuntime()}</span>;
}

Runtime.propTypes = {
  runtime: PropTypes.number
};
