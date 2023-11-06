import React, { useState } from "react";

export default function Comment({ postId, currentUserId, onCommentSubmit }) {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      userId: currentUserId,
      postId: postId,
      content: comment,
    };

    onCommentSubmit(newComment);

    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Comment:</label>
        <textarea
          rows="4"
          cols="50"
          value={comment}
          onChange={handleCommentChange}
        />
      </div>
      <button type="submit">Submit Comment</button>
    </form>
  );
}
