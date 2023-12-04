import React from 'react';
import PropTypes from 'prop-types';

// Represents the comment date for each comment
export default function CommentDate({ date }) {
  // Converts month from number to a month abbreviation
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

  // Format date for the user to make it easier to read
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
