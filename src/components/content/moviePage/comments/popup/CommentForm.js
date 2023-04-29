import React from 'react';

export default function CommentForm() {
  const style = {
    resize: 'none'
  };

  return (
    <form>
      <textarea id="comment" placeholder="What's on your mind?" rows="8" cols="50" style={style} />
    </form>
  );
}
