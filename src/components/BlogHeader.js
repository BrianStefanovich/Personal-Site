import React from "react";
//import { gridPlacement } from "./utilities";
import { Logo } from "./Icons";
import { navigate } from "gatsby";
import { gridPlacement } from "./../components/utilities";
import { Link } from "gatsby";

const headerLayoutGrid = {
  col: "col",
};

const postLayoutGrid = {
  sm: {
    col: "4",
  },
};

export default function BlogHeader() {
  return (
    <div className="header">
      <div className="headerLogo">
        <Logo className="headerIcon" />
      </div>

      <div className="blogHeader">
        <p
          onClick={() => {
            navigate("/");
          }}
          className="headerName"
        >
          Brian Stefanovich
        </p>
        <ul className="headerNavItems">
          <li
            onClick={() => {
              navigate("/blog");
            }}
          >
            <p>Home</p>
          </li>
          <li
            onClick={() => {
              navigate("/about");
            }}
          >
            <p>About this blog</p>
          </li>
        </ul>
      </div>

      <div className={"headerText"}>
        <hr className="line" />
        <p className={"headerTitle"}>The beauty of problem solving</p>
        <p className="headerSubTitle">Just (enough) abstract simplicity</p>
        <p className={"headerSubTitle"}>
          Thoughts and ideas facing business, computer science and mathematic
          challenges
        </p>
        <hr className="line" />
      </div>
    </div>
  );
}
