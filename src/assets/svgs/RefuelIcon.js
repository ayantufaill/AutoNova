import * as React from "react"
import Svg, { Path } from "react-native-svg"
const RefuelIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1F2336"
      strokeWidth={1.5}
      d="M3 5v-.5c0-.943 0-1.414.293-1.707C3.586 2.5 4.057 2.5 5 2.5c.943 0 1.414 0 1.707.293C7 3.086 7 3.557 7 4.5V5"
    />
    <Path
      stroke="#1F2336"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13 4h3"
    />
    <Path
      stroke="#1F2336"
      strokeWidth={1.5}
      d="M14 1h-1.333C10.793 1 10 1.934 10 3.667 10 4.533 9.603 5 8.667 5H5c-1.886 0-2.828 0-3.414.586C1 6.172 1 7.114 1 9v5c0 3.3 0 4.95 1.025 5.975C3.05 21 4.7 21 8 21h4c3.3 0 4.95 0 5.975-1.025C19 18.95 19 17.3 19 14V6c0-2.357 0-3.536-.732-4.268C17.535 1 16.357 1 14 1Z"
    />
    <Path
      stroke="#1F2336"
      strokeWidth={1.5}
      d="M7 13.587c0-1.464 1.264-2.911 2.15-3.747a1.23 1.23 0 0 1 1.7 0c.886.836 2.15 2.283 2.15 3.747a2.933 2.933 0 0 1-3 2.913c-1.864 0-3-1.477-3-2.913Z"
    />
  </Svg>
)
export default RefuelIcon
