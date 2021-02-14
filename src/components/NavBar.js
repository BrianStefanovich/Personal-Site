import React from "react"
import { gridPlacement } from "./utilities"

export default function NavBar() {
  return (
    <div className="bx--row">
      <div className="bx--col navBar">
        <Logo />
        <ul className="nav">
          <li> About</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  )
}

function Logo() {
  return (
    <svg
      className="logo"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-1.90735e-05 15.4539L26.7621 3.43323e-05V0.010231L46.8343 11.5968L40.1354 15.4539L26.767 7.73414L0.0125542 23.1638L-1.90735e-05 15.4539Z"
        fill="#0F62FE"
      />
      <path
        d="M26.6809 38.6431V38.633L33.3707 34.7762L13.3454 23.2361L0.00600815 30.9457L0.000366211 38.6545L13.3341 30.9463L26.6809 38.6431Z"
        fill="#0F62FE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.4221 38.5461L26.66 54V53.9898L6.58786 42.4032L13.2867 38.5461L26.6551 46.2659L53.4096 30.8362L53.4221 38.5461Z"
        fill="#0F62FE"
      />
      <path
        d="M26.6836 15.3569V15.3671L19.9793 19.242L40.048 30.8362L53.4163 23.0905L53.422 15.3455L40.0593 23.0899L26.6836 15.3569Z"
        fill="#0F62FE"
      />
    </svg>
  )
}
