import React from "react";
import { GitHubIcon, TwitterIcon, LinkedInIcon, InstagramIcon } from "./Icons";

export default function SideGadgetLeft() {
  return (
    <div className="sideGadgetLeft">
      <GitHubIcon className="sideGadgetLeftIcon" />
      <TwitterIcon className="sideGadgetLeftIcon" />
      <LinkedInIcon className="sideGadgetLeftIcon" />
      <InstagramIcon className="sideGadgetLeftIcon" />
      <div className="sideGadgetLeftLine"></div> 
    </div>
  );
}
