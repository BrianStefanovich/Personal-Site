import React, { Fragment } from "react";
import { gridPlacement } from "./utilities";
import { OpenDemoIcon, GitHubIcon } from "./Icons";

export default function ThingsIBuild(props) {
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
    <div className="thingsIBuild">
      <div className="bx--row bx--row--condensed">
        <p className={gridPlacement(titleGrid, "thingsIBuildTitle")}>
          Things I Build
        </p>
      </div>
      {props.data.map((elm, i) => {
        if (i % 2 === 0) {
          return (
            <Fragment>
              <div className="thingsIBuildCard bx--row bx--row--condensed">
                <img
                  src={elm.image}
                  className={gridPlacement(leftImageGrid, "thigsIBuildImage")}
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
                    <GitHubIcon className="thingsIBuildIcon" />
                    <OpenDemoIcon className="thingsIBuildIcon" />
                  </div>
                </div>
              </div>
            </Fragment>
          );
        }

        if (i % 2 === 1) {
          return (
            <Fragment>
              <div className="thingsIBuildCard bx--row bx--row--condensed">
                <div
                  className={gridPlacement(rightTextGrid, "thingsIBuildText")}
                >
                  <div>
                    <p className="thingsIBuildTextTitle">{elm.title}</p>
                    <p className="thingsIBuildTextBody">{elm.body}</p>
                  </div>

                  <p className="thingsIBuildTextFooter">{elm.footer}</p>
                  <div className="thingsIBuildTextButtons">
                    <GitHubIcon className="thingsIBuildIcon" />
                    <OpenDemoIcon className="thingsIBuildIcon" />
                  </div>
                </div>

                <img
                  src={elm.image}
                  className={gridPlacement(rightImageGrid, "thigsIBuildImage")}
                />
              </div>
            </Fragment>
          );
        }
        return null;
      })}
    </div>
  );
}
