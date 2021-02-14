import React from "react"
import { gridPlacement } from "./utilities"

export default function SideGadgetRigth() {
  return (
    <div className="sideGadgetRigth">
      <WhatsAppIcon />
      <TelegramIcon />
      <p className="sideGadgetRigthMail">email@brianstefanovich.com</p>
      <div className="sideGadgetRigthLine"></div>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      className="sideGadgetRigthIcon"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="33" height="33" rx="7.5" stroke="#4589ff" />
      <path
        d="M22.0481 19.1151L22.0399 19.1839C20.0241 18.1792 19.8133 18.0454 19.5529 18.4359C19.3724 18.7063 18.8462 19.3195 18.6876 19.501C18.5272 19.6798 18.3677 19.6935 18.0954 19.5698C17.8204 19.4323 16.9377 19.1435 15.8927 18.2085C15.0787 17.4798 14.5324 16.5861 14.371 16.3111C14.1024 15.8473 14.6644 15.7813 15.1759 14.8133C15.2675 14.6208 15.2208 14.4695 15.1529 14.3329C15.0842 14.1954 14.5369 12.848 14.3078 12.3108C14.0878 11.7755 13.8614 11.8433 13.6918 11.8433C13.1638 11.7975 12.7779 11.8048 12.4378 12.1587C10.9583 13.7848 11.3314 15.4623 12.5973 17.2461C15.0851 20.502 16.4106 21.1015 18.8343 21.9338C19.4888 22.1419 20.0855 22.1126 20.5576 22.0447C21.0838 21.9613 22.1774 21.3838 22.4056 20.7376C22.6394 20.0913 22.6394 19.5551 22.5706 19.4314C22.5028 19.3076 22.3231 19.2389 22.0481 19.1151Z"
        fill="#4589ff"
      />
      <path
        d="M24.81 9.16192C17.7618 2.34846 6.09717 7.29012 6.09258 16.9021C6.09258 18.8234 6.59583 20.697 7.55467 22.3516L6 28L11.8071 26.4857C19.0533 30.3998 27.9963 25.2024 28 16.9076C28 13.9963 26.8633 11.2565 24.7962 9.19767L24.81 9.16192ZM26.1685 16.8774C26.163 23.8742 18.4822 28.2438 12.4075 24.6726L12.0775 24.4764L8.64 25.3701L9.56125 22.0289L9.34217 21.6852C5.56183 15.6674 9.905 7.80253 17.066 7.80253C19.4988 7.80253 21.7823 8.75126 23.5019 10.47C25.2207 12.174 26.1685 14.4574 26.1685 16.8774Z"
        fill="#4589ff"
      />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg
      className="sideGadgetRigthIcon"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="33" height="33" rx="7.5" stroke="#4589ff" />
      <path
        d="M5.33231 16.9057C7.58297 15.7492 10.0953 14.7841 12.4427 13.814C16.4812 12.2251 20.5357 10.6637 24.6311 9.21008C25.4278 8.96239 26.8596 8.72025 27 9.82173C26.9231 11.3809 26.6069 12.9309 26.39 14.4809C25.8395 17.8895 25.2031 21.2865 24.5826 24.6838C24.3688 25.8154 22.8491 26.4013 21.8766 25.6771C19.5397 24.2046 17.1847 22.7465 14.8776 21.2399C14.1217 20.5235 14.8227 19.4949 15.4975 18.9834C17.4223 17.2138 19.4636 15.7106 21.2878 13.8498C21.7799 12.7413 20.326 13.6754 19.8464 13.9617C17.2113 15.6556 14.6408 17.4528 11.8626 18.9415C10.4435 19.6701 8.78949 19.0474 7.37103 18.6408C6.09922 18.1496 4.23554 17.6547 5.33215 16.9058L5.33231 16.9057Z"
        stroke="#4589ff"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
    </svg>
  )
}
