import React from "react";
import { gridPlacement, useIsInViewportOnce } from "./utilities";
import { CSSTransition } from "react-transition-group";

export default function AboutMe(props) {
  const [isInViewport, targetRef] = useIsInViewportOnce({ threshold: 20 });

  const textGrid = {
    max: {
      offset: "3",
      col: "6",
    },
    xlg: {
      offset: "2",
      col: "7",
    },
    lg: {
      offset: "2",
      col: "7",
    },
    md: {
      offset: "1",
      col: "6",
    },
    sm: {
      offset: "0",
      col: "col",
    },
  };

  const imageGrid = {
    md: {
      offset: "1",
      col: "6",
    },
    lg: {
      offset: "0",
      col: "4",
    },
  };

  return (
    <div className="bx--row aboutMe" ref={targetRef}>
      <CSSTransition
        mountOnEnter
        in={isInViewport}
        classNames="aboutMeTextFadeup"
        timeout={400}
      >
        <div className={gridPlacement(textGrid)} ref={props.navRef}>
          <p className="aboutMeTitle" ref={props.scrollRef}>
            About me
          </p>
          <p className="aboutMeBody">{props.contentData.body}</p>
        </div>
      </CSSTransition>
      <CSSTransition
        mountOnEnter
        in={isInViewport}
        classNames="aboutMeImageFadeup"
        timeout={400}
      >
        <div className={gridPlacement(imageGrid, "aboutMeImage")}>
          <img src={props.contentData.image} alt="me" />
        </div>
      </CSSTransition>
    </div>
  );
}
