import React, { useState, useEffect } from "react";
import { WhatsAppIcon, TelegramIcon } from "./Icons";
import { CSSTransition } from "react-transition-group";

export default function SideGadgetRigth() {
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
      classNames="sideGadgetRigthFadeup "
      timeout={200}
    >
      <div className="sideGadgetRigth">
        <a
          title="Write me on WhatsApp"
          target="_blank"
          href="https://wa.me/59894419518"
        >
          <WhatsAppIcon className="sideGadgetRigthIcon" />
        </a>
        <a
          title="Write me on Telegram"
          target="_blank"
          href="https://t.me/BrianStefanovich"
        >
          <TelegramIcon className="sideGadgetRigthIcon" />
        </a>
        <a
          title="Send me an eMail"
          href="mailto:stefanovich.brian@gmail.com"
          className="sideGadgetRigthMail"
        >
          stefanovich.brian@gmail.com
        </a>
        <div className="sideGadgetRigthLine"></div>
      </div>
    </CSSTransition>
  );
}
