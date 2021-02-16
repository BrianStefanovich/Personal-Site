import React from "react";
import { gridPlacement } from "./utilities";
import { Arrow } from "./Icons";
import useIsInViewport from "use-is-in-viewport";
import { CSSTransition } from "react-transition-group";

const titleGrid = {
  sm: {
    col: "col",
  },
  md: {
    offset: "1",
  },
  lg: {
    offset: "2",
  },
  xlg: {
    offset: "2",
  },
  max: {
    offset: "2",
  },
};

const cardImageGrid = {
  sm: {
    col: "4",
  },
  md: {
    offset: "1",
    col: "3",
  },
  lg: {
    offset: "2",
    col: "5",
  },
  xlg: {
    offset: "2",
    col: "4",
  },
  max: {
    offset: "3",
    col: "3",
  },
};

const cardBodyGrid = {
  sm: {
    col: "4",
  },
  md: {
    col: "3",
  },
  lg: {
    col: "7",
  },
  xlg: {
    col: "8",
  },
  max: {
    col: "7",
  },
};

export default function CheckMyBlog(props) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 5 });
  return (
    <div className="checkMyBlog" ref={targetRef}>
      <CSSTransition
        mountOnEnter
        in={isInViewport}
        classNames="checkMyBlogTitleFadeup"
        timeout={400}
      >
        <div className="bx--row">
          <p className={gridPlacement(titleGrid, "checkMyBlogTitle")}>
            Checkout my blog
          </p>
        </div>
      </CSSTransition>

      {props.data.map((elm, i) => {
        return (
          <CSSTransition
            mountOnEnter
            in={isInViewport}
            classNames="checkMyBlogCardFadeup"
            timeout={400}
          >
            <div
              style={{ transitionDelay: `${(i + 1) * 3}00ms` }}
              className="bx--row blogCard bx--no-gutter"
              key={i}
            >
              <img
                src={elm.image}
                class={gridPlacement(cardImageGrid, "checkMyBlogImage")}
                alt="blog thumbnail"
              />
              <div className={gridPlacement(cardBodyGrid, "blogCardBody")}>
                <div>
                  <p className="blogCardTitle">{elm.title}</p>
                  <p className="blogCardDate">{elm.date}</p>
                </div>
                <p className="blogCardText">{elm.text}</p>
                <Arrow className="blogIcon" />
              </div>
            </div>
          </CSSTransition>
        );
      })}
    </div>
  );
}
