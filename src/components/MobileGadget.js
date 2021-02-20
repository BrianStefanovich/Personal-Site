import React, { useState } from "react";
import {
  TelegramIcon,
  WhatsAppIcon,
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  InstagramIcon,
  EmailIcon,
} from "./Icons";
import { CSSTransition, Transition } from "react-transition-group";

export default function MobileGadget() {
  const [gadgetOpen, setGadgetOpen] = useState(false);

  const defaultStyle = {
    transition: `opacity ${100}ms ease-in-out`,
    transform: `translate(0px, 0px)`,
    display: `none`,
  };

  const transitionStylesBackdrop = {
    entering: { display: `block`, opacity: 0 },
    entered: { display: `block`, opacity: 1 },
    exiting: { display: `block`, opacity: 1 },
    exited: { display: `none`, opacity: 0 },
  };

  return (
    <div>
      <Transition in={gadgetOpen}>
        {(state) => (
          <div
            style={{ ...defaultStyle, ...transitionStylesBackdrop[state] }}
            className="mobileGadgetBackdrop"
          ></div>
        )}
      </Transition>
      <div className="mobileGadget">
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={gadgetOpen}
          classNames="mobileGadgetIconFadeup"
          timeout={400}
        >
          <a
            target="_blank"
            href="https://t.me/BrianStefanovich"
            style={{ transitionDelay: "200ms" }}
            className="mobileGadgetIcon"
          >
            <p>Write me on Telegram</p>
            <TelegramIcon className="icon" />
          </a>
        </CSSTransition>

        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={gadgetOpen}
          classNames="mobileGadgetIconFadeup"
          timeout={400}
        >
          <a
            style={{ transitionDelay: "150ms" }}
            className="mobileGadgetIcon"
            target="_blank"
            href="https://wa.me/59894419518"
          >
            <p>Write me on Whats App</p>
            <WhatsAppIcon className="icon" />
          </a>
        </CSSTransition>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={gadgetOpen}
          classNames="mobileGadgetIconFadeup"
          timeout={400}
        >
          <a
            href="https://www.linkedin.com/in/brian-stefanovich"
            target="_blank"
            style={{ transitionDelay: "100ms" }}
            className="mobileGadgetIcon"
          >
            <p>Find me on Linkedin</p>
            <LinkedInIcon className="icon" />
          </a>
        </CSSTransition>
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={gadgetOpen}
          classNames="mobileGadgetIconFadeup"
          timeout={400}
        >
          <a
            href="mailto:email@brianstefanovich.com"
            style={{ transitionDelay: "50ms" }}
            className="mobileGadgetIcon"
          >
            <p>Send me an eMail</p>
            <EmailIcon className="icon" />
          </a>
        </CSSTransition>
        <div
          className="mobileGadgetButtonIcon"
          onClick={() => {
            setGadgetOpen(!gadgetOpen);
          }}
        >
          <Button gadgetOpen={gadgetOpen} className="icon" />
        </div>
      </div>
    </div>
  );
}

function Button(props) {
  const duration = 100;

  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: `translate(0px, 0px)`,
  };

  const transitionStylesUp = {
    entering: { transform: `translate(0px, 0px)` },
    entered: { transform: `translate(0px, 10px)` },
    exiting: { transform: `translate(0px, 10px)` },
    exited: { transform: `translate(0px, 0px)` },
  };

  const transitionStylesDown = {
    entering: { transform: `translate(0px, 0px)` },
    entered: { transform: `translate(0px, -9px)` },
    exiting: { transform: `translate(0px, -9px)` },
    exited: { transform: `translate(0px, 0px)` },
  };

  return (
    <svg
      viewBox="0 0 14 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <Transition in={props.gadgetOpen} classNames="mobileButtonIconUp">
        {(state) => (
          <path
            style={{ ...defaultStyle, ...transitionStylesUp[state] }}
            d="M7 0L14 7L12.59 8.41L7 2.83L1.41 8.41L0 7L7 0Z"
            fill="currentColor"
          />
        )}
      </Transition>
      <Transition in={props.gadgetOpen}>
        {(state) => (
          <path
            style={{ ...defaultStyle, ...transitionStylesDown[state] }}
            d="M7 22L0 15L1.41 13.59L7 19.17L12.59 13.59L14 15L7 22Z"
            fill="currentColor"
          />
        )}
      </Transition>
    </svg>
  );
}
