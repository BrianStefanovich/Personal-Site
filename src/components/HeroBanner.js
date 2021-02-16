import React, { useState, useEffect } from "react";
import { gridPlacement } from "./utilities";
import { CSSTransition } from "react-transition-group";

export default function HeroBanner(props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  const grid = {
    max: {
      offset: "3",
      col: "9",
    },
    xlg: {
      offset: "3",
      col: "9",
    },
    lg: {
      offset: "3",
      col: "8",
    },
    md: {
      offset: "1",
      col: "6",
    },
    sm: {
      col: "col",
    },
  };

  return (
    <div className="hero" ref={props.navRef}>
      <div className="bx--row" style={{ margin: "0px" }}>
        <div className={gridPlacement(grid, "heroBanner")}>
          <CSSTransition
            mountOnEnter
            in={isMounted}
            classNames="heroBannerFadeup"
            timeout={400}
          >
            <p
              className="heroBannerPreTitle"
              style={{ transitionDelay: "100ms" }}
            >
              {props.data.preTitle}
            </p>
          </CSSTransition>
          <CSSTransition
            mountOnEnter
            in={isMounted}
            classNames="heroBannerFadeup"
            timeout={400}
          >
            <p className="heroBannerTitle" style={{ transitionDelay: "200ms" }}>
              {props.data.title}
            </p>
          </CSSTransition>
          <CSSTransition
            mountOnEnter
            in={isMounted}
            classNames="heroBannerFadeup"
            timeout={400}
            style={{ transitionDelay: "300ms" }}
          >
            <p className="heroBannerSubTitle">{props.data.subTitle}</p>
          </CSSTransition>
          <CSSTransition
            mountOnEnter
            in={isMounted}
            classNames="heroBannerFadeup"
            timeout={400}
            style={{ transitionDelay: "400ms" }}
          >
            <p className="heroBannerBody">{props.data.body}</p>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
}
