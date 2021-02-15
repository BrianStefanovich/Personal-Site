import React from "react";
import { gridPlacement } from "./utilities";
import { Arrow } from "./Icons";

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
  return (
    <div className="checkMyBlog">
      <div className="bx--row">
        <p className={gridPlacement(titleGrid, "checkMyBlogTitle")}>
          Checkout my blog
        </p>
      </div>

      {props.data.map((elm, i) => {
        return (
          <div className="bx--row blogCard bx--no-gutter" key={i}>
            <img
              src={elm.image}
              class={gridPlacement(cardImageGrid, "checkMyBlogImage")}
            />
            <div className={gridPlacement(cardBodyGrid, "blogCardBody")}>
              <div>
                <p className="blogCardTitle">{elm.title}</p>
                <p className="blogCardDate">{elm.date}</p>
              </div>
              <p className="blogCardText">
                {elm.text}
              </p>
              <Arrow className="blogIcon" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
