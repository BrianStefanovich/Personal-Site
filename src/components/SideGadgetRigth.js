import React from "react";
import { WhatsAppIcon, TelegramIcon } from "./Icons";

export default function SideGadgetRigth() {
  return (
    <div className="sideGadgetRigth">
      <WhatsAppIcon className="sideGadgetRigthIcon" />
      <TelegramIcon className="sideGadgetRigthIcon" />
      <p className="sideGadgetRigthMail">email@brianstefanovich.com</p>
      <div className="sideGadgetRigthLine"></div>
    </div>
  );
}
