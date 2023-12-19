import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MeterOdo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#64748B"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 1.5a10.5 10.5 0 1 1 0-21 10.5 10.5 0 0 1 0 21Z"
    />
    <Path
      fill="#64748B"
      d="M4.5 12a7.5 7.5 0 0 1 15 0 .75.75 0 1 1-1.5 0 6 6 0 1 0-12 0 .75.75 0 1 1-1.5 0Z"
    />
    <Path
      fill="#64748B"
      d="M13.37 14.715a2.25 2.25 0 1 1-1.427-.465l1.43-4.4a.75.75 0 1 1 1.426.463l-1.43 4.4v.002Zm-1.602 2.5a.75.75 0 1 0 .465-1.428.75.75 0 0 0-.466 1.427Z"
    />
  </Svg>
)
export default MeterOdo
