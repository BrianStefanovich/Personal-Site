import React from "react"
import { gridPlacement, gridOffset } from "./utilities"
import image from "./../testImg.jpg"

export default function CheckMyBlog() {
  return (
    <div className="checkMyBlog">
      <div className="bx--row">
        <p className="checkMyBlog-title bx--col-sm bx--offset-md-1 bx--offset-lg-2 bx--offset-xlg-2 bx--offset-max-3">
          Checkout my blog
        </p>
      </div>
      <div className="bx--row blogCard bx--no-gutter">
        <img
          src={image}
          class="bx--col-sm-4 bx--offset-md-1 bx--col-md-3 bx--offset-lg-2 bx--col-lg-5 bx--offset-xlg-2 bx--col-xlg-4 bx--offset-max-3 bx--col-max-3"
        />
        <div className="blogCardBody bx--col-sm-4 bx--col-md-3 bx--col-lg-7 bx--col-xlg-8 bx--col-max-7">
          <div>
            <p className="blogCardTitle">Time to Have More Fun</p>
            <p className="blogCardDate">15 Noviembre 1994</p>
          </div>
          <p className="blogCardText">
            Time to Have More Fun A single page web app for helping me choose
            where to travel, built with Next.js, Firebase, and Tailwind CSS
          </p>
        </div>
      </div>
      <div className="bx--row blogCard bx--no-gutter">
        <img
          src={image}
          class="bx--col-sm-4 bx--offset-md-1 bx--col-md-3 bx--offset-lg-2 bx--col-lg-5 bx--offset-xlg-2 bx--col-xlg-4 bx--offset-max-3 bx--col-max-3"
        />
        <div className="blogCardBody bx--col-sm-4 bx--col-md-3 bx--col-lg-7 bx--col-xlg-8 bx--col-max-7">
          <div>
            <p className="blogCardTitle">Time to Have More Fun</p>
            <p className="blogCardDate">15 Noviembre 1994</p>
          </div>
          <p className="blogCardText">
            Time to Have More Fun A single page web app for helping me choose
            where to travel, built with Next.js, Firebase, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  )
}
