import React from "react"
import { gridPlacement, gridOffset } from "./utilities"
import image from "./../testImg.jpg"

export default function ThingsIBuild() {
  const titleGrid = {
    max: {
      offset: 3,
      col: 6,
    },
    xlg: {
      offset: 2,
      col: 7,
    },
    lg: {
      offset: 2,
      col: 7,
    },
    md: {
      offset: 1,
      col: 6,
    },
    sm: {
      offset: 0,
      col: 4,
    },
  }

  const textGrid = {
    max: {
      offset: 9,
      col: 4,
    },
    xlg: {
      offset: 9,
      col: 5,
    },
    lg: {
      offset: 9,
      col: 5,
    },
    md: {
      offset: 1,
      col: 6,
    },
    sm: {
      offset: 0,
      col: 4,
    },
  }

  return (
    <div className="thingsIBuild">
      <div className="bx--row bx--row--condensed">
        <p className={gridPlacement(titleGrid, "thingIBuild-title")}>
          Things I Build
        </p>
      </div>

      <div className="card bx--row bx--row--condensed">
        <img
          src={image}
          className="image bx--col-sm-4 bx--offset-md-1 bx--col-md-6 bx--offset-lg-2 bx--col-lg-8 bx--offset-xlg-2 bx--col-xlg-8 bx--offset-max-3 bx--col-max-7"
        />
        <div
          className={
            "thingIBuild-text bx--col-sm bx--offset-md-1 bx--col-md-6 bx--offset-lg-0 bx--col-lg-4 bx--col-xlg-4 bx--col-max-3"
          }
        >
          <div>
            <p className="title">OctoProfile</p>
            <p className="body">
              A nicer look at your GitHub profile and repository stats with data
              top repos by number of stars, forks, and size. A nicer look at
              your GitHub profile and repository stats with data visualizations
              of your top languages and stars. Sort through your top repos by
              number of stars, forks, and size. A nicer look at your GitHub
              profile and repository stats with data visualizations of your top
              languages and stars. Sort through your top repos by number of
              stars, forks, and size.
            </p>
          </div>

          <p className="footer">Next.js Tailwind CSS Firebase</p>
          <div className="buttons">
            <GitHubLogo /> <OpenDemo />
          </div>
        </div>
      </div>

      <div className="card bx--row bx--row--condensed">
        <div
          className={
            "thingIBuild-text bx--col-sm bx--offset-md-1 bx--col-md-6 bx--offset-lg-2 bx--col-lg-4 bx--col-xlg-4 bx--offset-max-3 bx--col-max-3"
          }
        >
          <div>
            <p className="title">OctoProfile</p>
            <p className="body">
              A nicer look at your GitHub profile and repository stats with data
              top repos by number of stars, forks, and size. A nicer look at
              your GitHub profile and repository stats with data visualizations
              of your top languages and stars. Sort through your top repos by
              number of stars, forks, and size. A nicer look at your GitHub
              profile and repository stats with data visualizations of your top
              languages and stars. Sort through your top repos by number of
              stars, forks, and size.
            </p>
          </div>

          <p className="footer">Next.js Tailwind CSS Firebase</p>
          <div className="buttons">
            <GitHubLogo /> <OpenDemo />
          </div>
        </div>

        <img
          src={image}
          className="image bx--col-sm-4 bx--offset-md-1 bx--col-md-6 bx--offset-lg-0 bx--col-lg-8 bx--col-xlg-8 bx--col-max-7"
        />
      </div>
    </div>
  )
}

function GitHubLogo() {
  return (
    <svg
      className="icon"
      viewBox="0 0 25 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.8958 25.9638C8.71818 26.1147 9.07063 25.6155 9.07063 25.1859C9.07063 24.7564 9.07063 23.7812 9.07063 22.4229C4.50055 23.3981 3.5372 20.2404 3.5372 20.2404C3.21582 19.2453 2.53944 18.3995 1.63398 17.8605C0.14195 16.8621 1.75146 16.8737 1.75146 16.8737C2.27262 16.9464 2.77006 17.1359 3.20579 17.4277C3.64152 17.7194 4.00401 18.1057 4.26559 18.557C4.72065 19.3636 5.48122 19.9585 6.38008 20.211C7.27893 20.4636 8.24248 20.353 9.05888 19.9037C9.12521 19.08 9.4927 18.3083 10.0927 17.7328C6.45076 17.3148 2.60908 15.9217 2.60908 9.69912C2.58245 8.08298 3.18854 6.51913 4.30083 5.33402C3.79737 3.93417 3.85624 2.39684 4.46531 1.03858C4.46531 1.03858 5.83985 0.597426 8.98839 2.69871C11.6805 1.97307 14.5201 1.97307 17.2122 2.69871C20.349 0.597426 21.7235 1.03858 21.7235 1.03858C22.3326 2.39684 22.3914 3.93417 21.888 5.33402C23.0003 6.51913 23.6064 8.08298 23.5797 9.69912C23.5797 15.9449 19.738 17.3148 16.0726 17.7212C16.4652 18.1144 16.768 18.5863 16.9605 19.105C17.1531 19.6237 17.2309 20.1771 17.1887 20.728C17.1887 22.8989 17.1887 24.6519 17.1887 25.1859C17.1887 25.72 17.4824 26.1263 18.3635 25.9638"
        stroke="#E0E0E0"
        stroke-width="1.5"
      />
    </svg>
  )
}

function OpenDemo() {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.375C12.9665 16.375 13.75 15.5915 13.75 14.625C13.75 13.6585 12.9665 12.875 12 12.875C11.0335 12.875 10.25 13.6585 10.25 14.625C10.25 15.5915 11.0335 16.375 12 16.375Z"
        fill="#E0E0E0"
      />
      <path
        d="M18.8048 14.1687C18.2641 12.7914 17.3311 11.6031 16.1215 10.751C14.9119 9.8989 13.4789 9.42047 12 9.375C10.5211 9.42047 9.08806 9.8989 7.87847 10.751C6.66888 11.6031 5.73592 12.7914 5.19521 14.1687L5 14.625L5.19521 15.0813C5.73592 16.4586 6.66888 17.6469 7.87847 18.499C9.08806 19.3511 10.5211 19.8295 12 19.875C13.4789 19.8295 14.9119 19.3511 16.1215 18.499C17.3311 17.6469 18.2641 16.4586 18.8048 15.0813L19 14.625L18.8048 14.1687ZM12 18.125C11.3078 18.125 10.6311 17.9197 10.0555 17.5351C9.47993 17.1506 9.03133 16.6039 8.76642 15.9644C8.50151 15.3249 8.4322 14.6211 8.56725 13.9422C8.7023 13.2633 9.03564 12.6396 9.52513 12.1501C10.0146 11.6606 10.6383 11.3273 11.3172 11.1923C11.9961 11.0572 12.6999 11.1265 13.3394 11.3914C13.9789 11.6563 14.5256 12.1049 14.9101 12.6805C15.2947 13.2561 15.5 13.9328 15.5 14.625C15.499 15.5529 15.1299 16.4426 14.4737 17.0987C13.8176 17.7549 12.9279 18.124 12 18.125Z"
        fill="#E0E0E0"
      />
      <path
        d="M21.625 0.625H2.375C1.91087 0.625 1.46575 0.809374 1.13756 1.13756C0.809374 1.46575 0.625 1.91087 0.625 2.375V21.625C0.625 22.0891 0.809374 22.5342 1.13756 22.8624C1.46575 23.1906 1.91087 23.375 2.375 23.375H21.625C22.0891 23.375 22.5342 23.1906 22.8624 22.8624C23.1906 22.5342 23.375 22.0891 23.375 21.625V2.375C23.375 1.91087 23.1906 1.46575 22.8624 1.13756C22.5342 0.809374 22.0891 0.625 21.625 0.625ZM2.375 2.375H21.625V5.875H2.375V2.375ZM2.375 21.625V7.625H21.625V21.625H2.375Z"
        fill="#E0E0E0"
      />
    </svg>
  )
}
