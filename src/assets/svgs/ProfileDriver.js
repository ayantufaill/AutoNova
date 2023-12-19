import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"
const ProfileDriver = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#64748B"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M14 9h4M14 12.5h3"
    />
    <Rect
      width={20}
      height={18}
      x={2}
      y={3}
      stroke="#64748B"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={5}
    />
    <Path
      stroke="#64748B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 16c1.208-2.581 5.712-2.75 7 0"
    />
    <Path
      stroke="#64748B"
      strokeWidth={1.5}
      d="M10.5 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </Svg>
)
export default ProfileDriver
