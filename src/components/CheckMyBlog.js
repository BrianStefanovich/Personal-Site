import React from "react";
import { gridPlacement, useIsInViewportOnce } from "./utilities";
import { Arrow } from "./Icons";
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
    offset: "3",
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
    col: "col",
  },
  md: {
    col: "3",
  },
  lg: {
    col: "6",
  },
  xlg: {
    col: "7",
  },
  max: {
    col: "7",
  },
};

export default function CheckMyBlog(props) {
  const [isInViewport, targetRef] = useIsInViewportOnce({ threshold: 10 });
  return (
    <div className="checkMyBlog" ref={targetRef}>
      <CSSTransition
        mountOnEnter
        in={isInViewport}
        classNames="checkMyBlogTitleFadeup"
        timeout={400}
      >
        <div className="bx--row" ref={props.navRef}>
          <p
            ref={props.scrollRef}
            className={gridPlacement(titleGrid, "checkMyBlogTitle")}
          >
            Checkout my blog
          </p>
        </div>
      </CSSTransition>

      {props.contentData.map((elm, i) => {
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
                src={
                  window.location.href +
                  elm.node.frontmatter.thumbnail.publicURL
                }
                class={gridPlacement(cardImageGrid, "checkMyBlogImage")}
                alt="blog thumbnail"
              />
              <div className={gridPlacement(cardBodyGrid, "blogCardBody")}>
                <div>
                  <p className="blogCardTitle">{elm.node.frontmatter.title}</p>
                  <p className="blogCardDate">{elm.node.frontmatter.date}</p>
                </div>
                <p className="blogCardText">
                  {elm.node.frontmatter.description}
                </p>
                <a href={window.location.href + elm.node.frontmatter.path}>
                  <Arrow className="blogIcon" />
                </a>
              </div>
            </div>
          </CSSTransition>
        );
      })}
    </div>
  );
}
