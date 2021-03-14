import React, { useState } from "react";

export default function CommentForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
    props.postComment(name, email, body);
    setName("");
    setEmail("");
    setBody("");
  };

  const handleName = (e) => {
    setName(e.target.value);
    console.log("name: ", e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log("email: ", e.target.value);
  };

  const handleComment = (e) => {
    setBody(e.target.value);
    console.log("comment: ", e.target.value);
  };

  return (
    <div className="commentForm">
      <form onSubmit={handlePost}>
        <label htmlFor="commentName">Name</label>
        <br />
        <input
          onChange={handleName}
          type="text"
          id="commentName"
          value={name}
          disabled={props.isCommentDisabled}
        />
        <br />
        <label htmlFor="email">
          Email <small> (Will not be visible) </small>
        </label>
        <br />
        <input
          onChange={handleEmail}
          type="email"
          id="commentEmail"
          value={email}
          disabled={props.isCommentDisabled}
        />
        <br />
        <label htmlFor="commentBody">Comment</label>
        <br />
        <textarea
          onChange={handleComment}
          cols="30"
          rows="10"
          id="commentBody"
          value={body}
          disabled={props.isCommentDisabled}
        ></textarea>
        <br />
        <button type="submit" disabled={props.isCommentDisabled}>
          Post comment
        </button>
      </form>
    </div>
  );
}
