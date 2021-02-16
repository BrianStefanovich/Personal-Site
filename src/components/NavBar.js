import React from "react";
import { Logo } from "./Icons";
import { CSSTransition } from "react-transition-group";

export default function NavBar(props) {
  return (
    <div className="navBar">
      <Logo className="navBarLogo" />
      <ul className="navBarList">
        <li className="navBarAbout"> About</li>
        <li className="navBarExperience">Experience</li>
        <li className="navBarBlog">Blog</li>
      </ul>
    </div>
  );
}
