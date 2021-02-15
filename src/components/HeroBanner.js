import React from "react";
import { gridPlacement } from "./utilities";

export default function HeroBanner(props) {
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
      offset: "0",
      col: "4",
    },
  };

  return (
    <div className="hero">
      <div className="bx--row" style={{ margin: "0px" }}>
        <div className={gridPlacement(grid, "heroBanner")}>
          <p className="heroBannerPreTitle">{props.data.preTitle}</p>
          <p className="heroBannerTitle">{props.data.title}</p>
          <p className="heroBannerSubTitle">{props.data.subTitle}</p>
          <p className="heroBannerBody">{props.data.body}</p>
        </div>
      </div>
    </div>
  );
}
