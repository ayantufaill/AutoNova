import * as React from "react"
import Svg, { Path } from "react-native-svg"
const DownArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={8}
    fill="none"
    {...props}
  >
    <Path
      fill="#64748B"
      d="m6.718 7.46 5-5a1.004 1.004 0 1 0-1.42-1.42l-4.29 4.3-4.29-4.3a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.42l5 5a1 1 0 0 0 1.42 0Z"
    />
  </Svg>
)
export default DownArrow
