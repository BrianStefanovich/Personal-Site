import React from "react"
import { gridPlacement, gridOffset } from "./utilities"

export default function OtherProjects() {
  const imageGrid = {
    max: {
      offset: 3,
      col: 6,
    },
    xlg: {
      offset: 2,
      col: 7,
    },
    lg: {
      offset: 2,
      col: 7,
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

  const titleGrid = {
    max: {
      offset: 3,
      col: 6,
    },
    xlg: {
      offset: 2,
      col: 7,
    },
    lg: {
      offset: 2,
      col: 7,
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

  const classN1 =
    "bx--col-sm-4 bx--col-md-3 bx--col-lg-3 bx--col-xlg-4 bx--xol-max-5 otherProjects-card"

  const classN = "bx--col-sm-6 bx--col-md-3 bx--col-lg-4 otherProjects-card"

  return (
    <div className="otherProjects">
      <div className="bx--row">
        <p className="otherProjects-title bx--col-sm bx--offset-md-1 bx--offset-lg-2 bx--offset-xlg-2 bx--offset-max-3">
          Other projects
        </p>
      </div>

      <div className="bx--row">
        <div className="bx--col-sm bx--offset-md-1 bx--col-md-6 bx--offset-lg-2 bx--offset-xlg-2 bx--offset-max-3 ">
          <div className="bx--row">
            <div className={classN}></div>

            <div className={classN}>
              <p className="otherProjects-card-title">Time to Have More Fun</p>
              <p className="otherProjects-card-body">
                A single page web app for helping me choose where to travel,
                built with Next.js, Firebase, and Tailwind CSS
              </p>
              <p className="footer">Next.js Tailwind CSS Firebase</p>
            </div>

            <div className={classN}></div>

            <div className={classN}></div>

            <div className={classN}>
              <p className="otherProjects-card-title">Time to Have More Fun</p>
              <p className="otherProjects-card-body">
                A single page web app for helping me choose where to travel,
                built with Next.js, Firebase, and Tailwind CSS
              </p>
              <p className="footer">Next.js Tailwind CSS Firebase</p>
            </div>

            <div className={classN}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
