import React, { useState, useEffect } from "react";
import { Logo } from "./Icons";
import { CSSTransition } from "react-transition-group";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export default function NavBar(props) {
  const [showNav, setShowNav] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    const isScrollingDown = currPos.y < prevPos.y;

    if (isScrollingDown & showNav) {
      setShowNav(false);
    }

    if (!isScrollingDown & !showNav) {
      setShowNav(true);
    }
  });

  useEffect(() => {
    console.log("Show nav", showNav);
  }, [showNav]);

  return (
    <CSSTransition
      in={showNav}
      mountOnEnter
      classNames="navBarFadeup"
      timeout={1000}
    >
      <div className="navBar">
        <Logo className="navBarLogo" />
        <ul className="navBarList">
          <CSSTransition
            in={props.aboutNav}
            classNames="navBarAboutFadeup"
            timeout={400}
          >
            <li onClick={props.scrollToAbout} className="navBarAbout">
              About
            </li>
          </CSSTransition>
          <CSSTransition
            in={props.experienceNav}
            classNames="navBarExperienceFadeup"
            timeout={400}
          >
            <li onClick={props.scrollToExperience} className="navBarExperience">
              Experience
            </li>
          </CSSTransition>

          <CSSTransition
            in={props.blogNav}
            classNames="navBarBlogFadeup"
            timeout={400}
          >
            <li onClick={props.scrollToBlog} className="navBarBlog">
              Blog
            </li>
          </CSSTransition>
        </ul>
      </div>
    </CSSTransition>
  );
}
