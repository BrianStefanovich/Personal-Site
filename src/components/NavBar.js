import React from "react";
import { Logo } from "./Icons";

export default function NavBar() {
  return (
    <div className="bx--row">
      <div className="bx--col navBar">
        <Logo className="navBarLogo" />
        <ul className="nav">
          <li> About</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
}

