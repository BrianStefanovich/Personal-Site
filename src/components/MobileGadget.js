import React from "react";
import {
  TelegramIcon,
  WhatsAppIcon,
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
  ChatIcon,
  EmailIcon,
} from "./Icons";

export default function MobileGadget() {
  return (
    <div className="mobileGadgetBackdrop">
      <div className="mobileGadget">
        <TelegramIcon className="mobileGadgetIcon" />
        <WhatsAppIcon className="mobileGadgetIcon" />
        <GitHubIcon className="mobileGadgetIcon" />
        <TwitterIcon className="mobileGadgetIcon" />
        <LinkedInIcon className="mobileGadgetIcon" />
        <InstagramIcon className="mobileGadgetIcon" />
        <EmailIcon className="mobileGadgetIcon" />
        <ChatIcon className="mobileGadgetIcon" />
      </div>
    </div>
  );
}
