import * as React from "react";
const SvgTrafficLightsL = (props) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M24 31a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8m0-13a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M24 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M34 44H14V4h20zm-19-1h18V5H15z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrafficLightsL;
