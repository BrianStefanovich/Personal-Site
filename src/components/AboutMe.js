import React from "react";
import { gridPlacement, useIsInViewportOnce } from "./utilities";
import { CSSTransition } from "react-transition-group";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {
  JavascriptLogo,
  NodeLogo,
  GatsbyLogo,
  PythonLogo,
  GoogleCloudLogo,
  FirebaseLogo,
  PhpLogo,
  ReactLogo
} from "./Icons";

export default function AboutMe(props) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(sourceInstanceName: { eq: "assets" }, name: { eq: "foto-cv" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const [isInViewport, targetRef] = useIsInViewportOnce({ threshold: 20 });

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
      col: "col",
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
    <div className="bx--row aboutMe" ref={targetRef}>
      <CSSTransition
        mountOnEnter
        in={isInViewport}
        classNames="aboutMeTextFadeup"
        timeout={400}
      >
        <div className={gridPlacement(textGrid)} ref={props.navRef}>
          <p className="aboutMeTitle" ref={props.scrollRef}>
            About me
          </p>
          {props.contentData.body.map((elm, i) => {
            return (
              <p key={i} className="aboutMeBody">
                {elm}
              </p>
            );
          })}
          <div className="aboutMeTechs">
            <JavascriptLogo className="aboutMeTechIcon" />
            <ReactLogo className="aboutMeTechIcon" />
            <PythonLogo className="aboutMeTechIcon" />
            <NodeLogo className="aboutMeTechIcon" />
            <GatsbyLogo className="aboutMeTechIcon" />
            <PhpLogo className="aboutMeTechIcon" />
            <GoogleCloudLogo className="aboutMeTechIcon" />
            <FirebaseLogo className="aboutMeTechIcon" />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        mountOnEnter
        in={isInViewport}
        classNames="aboutMeImageFadeup"
        timeout={400}
      >
        <div className={gridPlacement(imageGrid, "aboutMeImage")}>
          <Img fluid={data.file.childImageSharp.fluid} alt="me" />
        </div>
      </CSSTransition>
    </div>
  );
}
