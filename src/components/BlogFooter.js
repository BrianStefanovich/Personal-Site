import React from "react";
import { GitHubIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  const date = new Date();
  return (
    <div className="blogFooter">
      <div className="footerIcons">
        <a href="https://github.com/BrianStefanovich/" target="_blank">
          <GitHubIcon className="footerIcon" />
        </a>
        <a href="https://www.instagram.com/b_stefanovich/" target="_blank">
          <InstagramIcon className="footerIcon" />
        </a>
        <a href="https://twitter.com/bstefanovich" target="_blank">
          <TwitterIcon className="footerIcon" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/brian-stefanovich">
          <LinkedInIcon className="footerIcon" />
        </a>
      </div>
      <hr className="footerSeparator" />
      <p className="footerText">
        Designed & Built by Brian Stefanovich © {date.getFullYear()}. All rights
        reserved
      </p>
    </div>
  );
}
