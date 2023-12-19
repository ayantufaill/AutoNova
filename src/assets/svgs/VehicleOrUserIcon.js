import * as React from "react"
import Svg, { Path } from "react-native-svg"
const VehicleOrUserIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1F2336"
      strokeWidth={1.5}
      d="M2.789 8.037C2.08 8.42.227 9.202 1.356 10.18c.552.478 1.167.82 1.94.82h4.409c.772 0 1.387-.342 1.939-.82 1.13-.978-.725-1.76-1.433-2.143-1.659-.898-3.763-.898-5.422 0ZM7.75 3.273A2.261 2.261 0 0 1 5.5 5.545a2.261 2.261 0 0 1-2.25-2.272A2.261 2.261 0 0 1 5.5 1a2.261 2.261 0 0 1 2.25 2.273Z"
    />
    <Path
      stroke="#1F2336"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 14c0 3.317 2.683 6 6 6l-.857-1.714M19 8c0-3.317-2.683-6-6-6l.857 1.714"
    />
    <Path
      stroke="#1F2336"
      strokeWidth={1.5}
      d="M13.789 18.037c-.708.383-2.562 1.165-1.433 2.143.552.478 1.167.82 1.94.82h4.409c.772 0 1.387-.342 1.939-.82 1.13-.978-.725-1.76-1.433-2.143-1.659-.898-3.763-.898-5.422 0ZM18.75 13.273a2.262 2.262 0 0 1-2.25 2.273 2.262 2.262 0 0 1-2.25-2.273A2.261 2.261 0 0 1 16.5 11a2.261 2.261 0 0 1 2.25 2.273Z"
    />
  </Svg>
)
export default VehicleOrUserIcon
