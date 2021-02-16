import React, { useState, useEffect } from "react";
import { GitHubIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from "./Icons";
import { CSSTransition } from "react-transition-group";

export default function SideGadgetLeft() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={isMounted}
      classNames="sideGadgetLeftFadeup"
      timeout={200}
    >
      <div className="sideGadgetLeft">
        <a target="_blank" href="https://github.com/BrianStefanovich/">
          <GitHubIcon className="sideGadgetLeftIcon" />
        </a>
        <a target="_blank" href="https://twitter.com/bstefanovich">
          <TwitterIcon className="sideGadgetLeftIcon" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/brian-stefanovich">
          <LinkedInIcon className="sideGadgetLeftIcon" />
        </a>
        <a target="_blank" href="https://www.instagram.com/b_stefanovich/">
          <InstagramIcon className="sideGadgetLeftIcon" />
        </a>
        <div className="sideGadgetLeftLine"></div>
      </div>
    </CSSTransition>
  );
}
