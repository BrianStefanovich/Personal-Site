import React from "react";
import { gridPlacement } from "./utilities";
import { GitHubIcon, OpenDemoIcon } from "./Icons";

const blogIndexCardGrid = {
  sm: {
    col: "4",
  },
  md: {
    col: "2",
  },
};

export default function BlogIndexCard(props) {
  return (
    <div className={gridPlacement(blogIndexCardGrid, "blogIndexCard")}>
      <p className="blogIndexCardTitle">{props.title}</p>
      <p className="blogIndexCardDate">{props.date}</p>
      <p className="blogIndexCardBody">{props.body}</p>
      {/*
      <div className="blogIndexCardCardButtons">
        <GitHubIcon className="blogIndexCardIcon" />
        <OpenDemoIcon className="blogIndexCardIcon" />
      </div>
	*/}
    </div>
  );
}
