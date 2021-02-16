import React from "react";
import { GitHubIcon, InstagramIcon, TwitterIcon, LinkedInIcon } from "./Icons";

export default function Footer() {
  const date = new Date();
  return (
    <div className="footer">
      {/*
      <div className="footerIcons">
        <GitHubIcon className="footerIcon" />
        <InstagramIcon className="footerIcon" />
        <TwitterIcon className="footerIcon" />
        <LinkedInIcon className="footerIcon" />
      </div>
*/}
      <hr className="footerSeparator" />
      <p className="footerText">
        Designed & Built by Brian Stefanovich © {date.getFullYear()}. All rights
        reserved
      </p>
    </div>
  );
}
