import React from "react";
import { gridPlacement, useIsInViewportOnce } from "./utilities";
import { OpenDemoIcon, GitHubIcon } from "./Icons";
import { CSSTransition } from "react-transition-group";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function ThingsIBuild(props) {
  const data = useStaticQuery(graphql`
    query ThingsIBuild {
      img1: file(
        sourceInstanceName: { eq: "assets" }
        name: { eq: "wa-connection" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(
        sourceInstanceName: { eq: "assets" }
        name: { eq: "connectivitys-web" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  console.log("DATA: ", data);

  const [isTitleInViewport, titleTargetRef] = useIsInViewportOnce({
    threshold: 90,
  });
  const [isCardInViewport, cardTargetRef] = useIsInViewportOnce({
    threshold: 80,
  });

  const titleGrid = {
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
      col: "4",
    },
  };

  const leftImageGrid = {
    sm: {
      col: "4",
    },
    md: {
      offset: "1",
      col: "6",
    },
    lg: {
      offset: "2",
      col: "8",
    },
    xlg: {
      offset: "2",
      col: "8",
    },
    max: {
      offset: "3",
      col: "7",
    },
  };

  const leftTextGrid = {
    sm: {
      col: "col",
    },
    md: {
      offset: "1",
      col: "6",
    },
    lg: {
      offset: "0",
      col: "4",
    },
    xlg: {
      col: "4",
    },
    max: {
      col: "3",
    },
  };

  const rightTextGrid = {
    sm: {
      col: "col",
    },
    md: {
      offset: "1",
      col: "6",
    },
    lg: {
      offset: "2",
      col: "4",
    },
    xlg: {
      col: "4",
    },
    max: {
      offset: "3",
      col: "3",
    },
  };

  const rightImageGrid = {
    sm: {
      col: "4",
    },
    md: {
      offset: "1",
      col: "6",
    },
    lg: {
      offset: "0",
      col: "8",
    },
    xlg: {
      col: "8",
    },
    max: {
      col: "7",
    },
  };

  return (
    <div className="thingsIBuild" ref={titleTargetRef}>
      <CSSTransition
        mountOnEnter
        in={isTitleInViewport}
        classNames="thingsIBuildTitleFadeup"
        timeout={400}
      >
        <div className="bx--row bx--row--condensed" ref={props.navRef}>
          <p
            ref={props.scrollRef}
            className={gridPlacement(titleGrid, "thingsIBuildTitle")}
          >
            Things I've built
          </p>
        </div>
      </CSSTransition>

      <div ref={cardTargetRef}>
        {props.contentData.map((elm, i) => {
          if (i % 2 === 0) {
            return (
              <CSSTransition
                mountOnEnter
                in={isCardInViewport}
                classNames="thingsIBuildCardFadeup"
                timeout={400}
              >
                <div className="thingsIBuildCardFadeup thingsIBuildCard bx--row bx--row--condensed">
                  <Img
                    fluid={data.img1.childImageSharp.fluid}
                    className={gridPlacement(leftImageGrid, "thigsIBuildImage")}
                    alt="project thumbnail"
                  />
                  <div
                    className={gridPlacement(leftTextGrid, "thingsIBuildText")}
                  >
                    <div>
                      <p className="thingsIBuildTextTitle">{elm.title}</p>
                      <p className="thingsIBuildTextBody">{elm.body}</p>
                    </div>

                    <p className="thingsIBuildTextFooter">{elm.footer}</p>
                    <div className="thingsIBuildTextButtons">
                      {elm.gitHub ? (
                        <a href={elm.gitHub} target="_blank">
                          <GitHubIcon className="thingsIBuildIcon" />
                        </a>
                      ) : null}
                      {elm.demo ? (
                        <a href={elm.demo} target="_blank">
                          <OpenDemoIcon className="thingsIBuildIcon" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </CSSTransition>
            );
          }

          if (i % 2 === 1) {
            return (
              <CSSTransition
                mountOnEnter
                in={isCardInViewport}
                classNames="thingsIBuildCardFadeup"
                timeout={600}
              >
                <div className="thingsIBuildCard thingsIBuildCardFadeup bx--row bx--row--condensed">
                  <div
                    className={gridPlacement(rightTextGrid, "thingsIBuildText")}
                  >
                    <div>
                      <p className="thingsIBuildTextTitle">{elm.title}</p>
                      <p className="thingsIBuildTextBody">{elm.body}</p>
                    </div>

                    <p className="thingsIBuildTextFooter">{elm.footer}</p>
                    <div className="thingsIBuildTextButtons">
                      {elm.gitHub ? (
                        <a href={elm.gitHub} target="_blank">
                          <GitHubIcon className="thingsIBuildIcon" />
                        </a>
                      ) : null}
                      {elm.demo ? (
                        <a href={elm.demo} target="_blank">
                          <OpenDemoIcon className="thingsIBuildIcon" />
                        </a>
                      ) : null}
                    </div>
                  </div>

                  <Img
                    src={elm.image}
                    fluid={data.img2.childImageSharp.fluid}
                    className={gridPlacement(
                      rightImageGrid,
                      "thigsIBuildImage"
                    )}
                    alt="project thumbnail"
                  />
                </div>
              </CSSTransition>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
