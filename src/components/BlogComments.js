import React from "react";
// import { graphql, useStaticQuery } from "gatsby";

export default function BlogComment(props) {
  return (
    <div className="blogComment">
      <form action="">
        <p>{props.title}</p>
        <label for="name">Name:</label>
        <br />
        <input type="text" name="name" />
        <label for="email">email</label>
        <br />
        <input type="email" name="email" />
      </form>
    </div>
  );
}
