import React from "react";
import { gridPlacement } from "./utilities";

export default function AboutMe(props) {
  const textGrid = {
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

  const imageGrid = {
    md: {
      offset: "1",
      col: "6",
    },
    lg: {
      offset: "0",
      col: "4",
    },
  };

  return (
    <div className="bx--row aboutMe">
      <div className={gridPlacement(textGrid)}>
        <p className="aboutMeTitle">About me</p>
        <p className="aboutMeBody">{props.data.body}</p>
      </div>

      <div className={gridPlacement(imageGrid, "aboutMeImage")}>
        <img src={props.data.image} alt="me" />
      </div>
    </div>
  );
}
