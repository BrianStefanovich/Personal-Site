import React from "react";

export default function Comment(props) {
  return (
    <div className="comment">
      <hr />
      <small className="authName">{props.user_name}</small>
      <small className="commentDate">{props.comment_date}</small>
      <p className="commentBody">{props.comment_body}</p>
    </div>
  );
}
