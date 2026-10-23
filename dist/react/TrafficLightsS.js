import * as React from "react";
const SvgTrafficLightsS = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-8a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
      clipRule="evenodd"
    />
    <path fill="currentColor" d="M12 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M18 24H6V0h12zM7 23h10V1H7z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTrafficLightsS;
