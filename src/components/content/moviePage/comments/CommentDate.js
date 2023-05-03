import React from 'react';
import PropTypes from 'prop-types';

export default function CommentDate({ date }) {
  const convertMonth = (month) => {
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];

    return months[month - 1];
  };

  const formatDate = () => {
    const dateString = date.toString();
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6);

    const monthAbbrev = convertMonth(month);

    return `${monthAbbrev} ${day}, ${year}`;
  };

  return <div className="commentDate">{formatDate()}</div>;
}

CommentDate.propTypes = {
  date: PropTypes.number
};
