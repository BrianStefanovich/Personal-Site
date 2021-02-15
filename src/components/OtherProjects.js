import React from "react";
import { gridPlacement } from "./utilities";
import { GitHubIcon, OpenDemoIcon } from "./Icons";

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
    offset: "4",
  },
};

export default function OtherProjects(props) {
  return (
    <div className="otherProjects">
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

      <div className="bx--row">
        <div className={gridPlacement(otherProjectsLayoutGrid)}>
          <div className="bx--row">
            {props.data.map((elm, i) => {
              return (
                <div
                  key={i}
                  className={gridPlacement(
                    otherProjectsCardGrid,
                    "otherProjectsCard"
                  )}
                >
                  <p className="otherProjectsCardTitle">{elm.title}</p>
                  <p className="otherProjectsCardBody">{elm.body}</p>
                  <p className="otherProjectsCardFooter">{elm.footer}</p>
                  <div className="otherProjectsCardButtons">
                    <GitHubIcon className="otherProjectsCardIcon" />
                    <OpenDemoIcon className="otherProjectsCardIcon" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
