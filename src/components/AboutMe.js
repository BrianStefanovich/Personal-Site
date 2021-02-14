import React from "react"
import { gridPlacement } from "./utilities"
import foto from "./../foto-cv.jpg"

export default function AboutMe() {
  const textGrid = {
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

  const imageGrid = {
    max: {
      offset: 9,
      col: 4,
    },
    xlg: {
      offset: 9,
      col: 5,
    },
    lg: {
      offset: 9,
      col: 6,
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
    <div className="bx--row aboutMe">
      <div className={gridPlacement(textGrid)}>
        <p className="title">About me</p>
        <p className="body">
          Hello! I'm Brittany, a software engineer based in Boston, MA.
          <br />
          <br />
          I enjoy creating things that live on the internet, whether that be
          websites, applications, or anything in between. My goal is to always
          build products that provide pixel-perfect, performant experiences.
          <br />
          <br />
          Shortly after graduating from Northeastern University, I joined the
          engineering team at Upstatement where I work on a wide variety of
          interesting and meaningful projects on a daily basis.
          <br />
          <br />
          Here are a few technologies I've been working with :
          <br />
          <br />
          JavaScript HTML & (S)CSS React Vue Node.js WordPress
        </p>
      </div>

      <div className="bx--offset-md-1 bx--col-md-6 bx--offset-lg-0 bx--col-lg-4">
        <img style={{ width: "100%" }} src={foto} alt="foto" />
      </div>
    </div>
  )
}
