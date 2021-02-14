import React from "react"
import { gridPlacement } from "./utilities"

export default function HeroBanner() {
  const grid = {
    max: {
      offset: 3,
      col: 9,
    },
    xlg: {
      offset: 3,
      col: 9,
    },
    lg: {
      offset: 3,
      col: 8,
    },
    md: {
      offset: 1,
      col: 6,
    },
    sm: {
      offset: 0,
      col: 4,
    },
  }

  return (
    <div className="bx--row" style={{ margin: "0px" }}>
      <div className={gridPlacement(grid, "heroBanner")}>
        <p className="preTitle">Hi, my name is</p>
        <p className="title"> Brian Stefanovich</p>
        <p className="subTitle">I build things for the web</p>
        <p className="body">
          I'm a software engineer based in Boston, MA specializing in building
          (and occasionally designing) exceptional websites, applications, and
          everything in between.
        </p>
      </div>
    </div>
  )
}
