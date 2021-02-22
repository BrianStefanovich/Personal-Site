import React from "react";
import { gridPlacement, useIsInViewportOnce } from "./utilities";
import { Arrow } from "./Icons";
import { CSSTransition } from "react-transition-group";
import Img from "gatsby-image";

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
      <div ref={props.navRef}></div>
      <CSSTransition
        mountOnEnter
        in={isInViewport}
        classNames="checkMyBlogTitleFadeup"
        timeout={400}
      >
        <div className="bx--row">
          <p
            ref={props.scrollRef}
            className={gridPlacement(titleGrid, "checkMyBlogTitle")}
          >
            Check out my blog
          </p>
        </div>
      </CSSTransition>

      {props.contentData.map((elm, i) => {
        const timestamp = Date.parse(elm.node.frontmatter.date);
        const date = new Date(timestamp).toLocaleDateString("en-us", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "utc",
        });
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
              <Img
                fluid={elm.node.frontmatter.thumbnail.childImageSharp.fluid}
                className={gridPlacement(cardImageGrid, "checkMyBlogImage")}
                alt="blog thumbnail"
              />
              <div className={gridPlacement(cardBodyGrid, "blogCardBody")}>
                <div>
                  <p className="blogCardTitle">{elm.node.frontmatter.title}</p>
                  <p className="blogCardDate">{`${date}`}</p>
                </div>
                <p className="blogCardText">
                  {elm.node.frontmatter.description}
                </p>
                <a
                  href={
                    window.location.href + "blog/" + elm.node.frontmatter.slug
                  }
                >
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
