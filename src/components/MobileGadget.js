import React from "react"
import { gridPlacement } from "./utilities"

export default function MobileGadget() {
  return (
    <div className="mobileGadgetBackdrop">
      <div className="mobileGadget">
        <TelegramIcon />
        <WhatsAppIcon />
        <GitHubIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <InstagramIcon />
        <EmailIcon />
        <ChatIcon />
      </div>
    </div>
  )
}

function ChatIcon() {
  return (
    <svg
      className="mobileGadgetIcon"
      viewBox="0 0 42 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.5012 38.125L21 36.6875L26.75 26.625H35.375C36.1375 26.625 36.8688 26.3221 37.4079 25.7829C37.9471 25.2438 38.25 24.5125 38.25 23.75V6.5C38.25 5.7375 37.9471 5.00624 37.4079 4.46707C36.8688 3.9279 36.1375 3.625 35.375 3.625H6.625C5.8625 3.625 5.13124 3.9279 4.59207 4.46707C4.0529 5.00624 3.75 5.7375 3.75 6.5V23.75C3.75 24.5125 4.0529 25.2438 4.59207 25.7829C5.13124 26.3221 5.8625 26.625 6.625 26.625H19.5625V29.5H6.625C5.10001 29.5 3.63747 28.8942 2.55914 27.8159C1.4808 26.7375 0.875 25.275 0.875 23.75V6.5C0.875 4.97501 1.4808 3.51247 2.55914 2.43414C3.63747 1.3558 5.10001 0.75 6.625 0.75H35.375C36.9 0.75 38.3625 1.3558 39.4409 2.43414C40.5192 3.51247 41.125 4.97501 41.125 6.5V23.75C41.125 25.275 40.5192 26.7375 39.4409 27.8159C38.3625 28.8942 36.9 29.5 35.375 29.5H28.4175L23.5012 38.125Z"
        fill="currentColor"
      />
      <path d="M32.5 9.375H9.5V12.25H32.5V9.375Z" fill="currentColor" />
      <path d="M23.875 18H9.5V20.875H23.875V18Z" fill="currentColor" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      className="mobileGadgetIcon"
      viewBox="0 -4 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H26C26.5304 20 27.0391 19.7893 27.4142 19.4142C27.7893 19.0391 28 18.5304 28 18V2C28 1.46957 27.7893 0.960859 27.4142 0.585786C27.0391 0.210714 26.5304 0 26 0ZM23.8 2L14 8.78L4.2 2H23.8ZM2 18V2.91L13.43 10.82C13.5974 10.9361 13.7963 10.9984 14 10.9984C14.2037 10.9984 14.4026 10.9361 14.57 10.82L26 2.91V18H2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      className="mobileGadgetIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      className="mobileGadgetIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg
      className="mobileGadgetIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      className="mobileGadgetIcon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      className="mobileGadgetIcon"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.0481 13.1151L16.0399 13.1839C14.0241 12.1792 13.8133 12.0454 13.5529 12.4359C13.3724 12.7063 12.8462 13.3195 12.6876 13.501C12.5272 13.6798 12.3677 13.6935 12.0954 13.5698C11.8204 13.4323 10.9377 13.1435 9.89269 12.2085C9.07869 11.4798 8.53236 10.5861 8.37103 10.3111C8.10244 9.84725 8.66436 9.78125 9.17586 8.81327C9.26753 8.62077 9.22078 8.46953 9.15294 8.33295C9.08419 8.19545 8.53694 6.84797 8.30778 6.31081C8.08778 5.77549 7.86136 5.84332 7.69178 5.84332C7.16378 5.79749 6.77786 5.80482 6.43778 6.15865C4.95828 7.78479 5.33136 9.46226 6.59728 11.2461C9.08511 14.502 10.4106 15.1015 12.8343 15.9338C13.4888 16.1419 14.0855 16.1126 14.5576 16.0447C15.0838 15.9613 16.1774 15.3838 16.4056 14.7376C16.6394 14.0913 16.6394 13.5551 16.5706 13.4314C16.5028 13.3076 16.3231 13.2389 16.0481 13.1151Z"
        fill="currentColor"
      />
      <path
        d="M18.81 3.16192C11.7618 -3.65154 0.0971667 1.29012 0.0925833 10.9021C0.0925833 12.8234 0.595833 14.697 1.55467 16.3516L0 22L5.80708 20.4857C13.0533 24.3998 21.9963 19.2024 22 10.9076C22 7.99634 20.8633 5.25647 18.7962 3.19767L18.81 3.16192ZM20.1685 10.8774C20.163 17.8742 12.4822 22.2438 6.4075 18.6726L6.0775 18.4764L2.64 19.3701L3.56125 16.0289L3.34217 15.6852C-0.438167 9.66739 3.905 1.80253 11.066 1.80253C13.4988 1.80253 15.7823 2.75126 17.5019 4.46998C19.2207 6.17404 20.1685 8.45741 20.1685 10.8774Z"
        fill="currentColor"
      />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg
      className="mobileGadgetIcon"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33231 10.303C3.58297 8.94223 6.09532 7.80649 8.44273 6.66493C12.4812 4.79516 16.5357 2.95778 20.6311 1.24721C21.4278 0.955748 22.8596 0.6708 23 1.96698C22.9231 3.80171 22.6069 5.6257 22.39 7.44969C21.8395 11.4608 21.2031 15.4582 20.5826 19.4561C20.3688 20.7877 18.8491 21.4771 17.8766 20.6249C15.5397 18.8922 13.1847 17.1763 10.8776 15.4034C10.1217 14.5604 10.8227 13.35 11.4975 12.748C13.4223 10.6657 15.4636 8.89679 17.2878 6.70702C17.7799 5.40256 16.326 6.50185 15.8464 6.83875C13.2113 8.83198 10.6408 10.9469 7.86257 12.6987C6.44347 13.5562 4.78949 12.8234 3.37103 12.3449C2.09922 11.7669 0.235537 11.1845 1.33215 10.3032L1.33231 10.303Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  )
}

