import React from "react";
import { gridPlacement, useIsInViewportOnce } from "./utilities";
import { GitHubIcon, OpenDemoIcon } from "./Icons";
import { CSSTransition } from "react-transition-group";

const otherProjectsTitleGrid = {
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

const otherProjectsLayoutGrid = {
  sm: {
    col: "col",
  },
  md: {
    offset: "1",
    col: "6",
  },
  lg: {
    offset: "2",
  },
  xlg: {
    offset: "2",
  },
  max: {
    offset: "3",
    col: "11",
  },
};

const otherProjectsCardGrid = {
  sm: {
    col: "6",
  },
  md: {
    col: "3",
  },
  lg: {
    col: "4",
  },
  xlg: {
    col: "4",
  },
  max: {
    col: "3",
  },
};

export default function OtherProjects(props) {
  const [isInViewport, targetRef] = useIsInViewportOnce({ threshold: 40 });

  return (
    <div className="otherProjects" ref={targetRef}>
      <CSSTransition
        mountOnEnter
        in={isInViewport}
        classNames="otherProjectsTitleFadeup"
        timeout={400}
      >
        <div className="bx--row">
          <p
            className={gridPlacement(
              otherProjectsTitleGrid,
              "otherProjectsTitle"
            )}
          >
            Other projects
          </p>
        </div>
      </CSSTransition>

      <div className="bx--row">
        <div className={gridPlacement(otherProjectsLayoutGrid)}>
          <div className="bx--row">
            {props.contentData.map((elm, i) => {
              return (
                <CSSTransition
                  mountOnEnter
                  in={isInViewport}
                  classNames="otherProjectsCardFadeup"
                  timeout={400}
                >
                  <div
                    key={i}
                    className={gridPlacement(
                      otherProjectsCardGrid,
                      "otherProjectsCard"
                    )}
                    style={{ transitionDelay: `${i + 2}00ms` }}
                  >
                    <p className="otherProjectsCardTitle">{elm.title}</p>
                    <p className="otherProjectsCardBody">{elm.body}</p>
                    <p className="otherProjectsCardFooter">{elm.footer}</p>
                    <div className="otherProjectsCardButtons">
                      {elm.gitHub ? (
                        <a target="_blank" href={elm.gitHub}>
                          <GitHubIcon className="otherProjectsCardIcon" />
                        </a>
                      ) : null}
                      {elm.demo ? (
                        <a href={elm.demo} target="_blank">
                          <OpenDemoIcon className="otherProjectsCardIcon" />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </CSSTransition>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
