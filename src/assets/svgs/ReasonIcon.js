import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ReasonIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1F2336"
      strokeWidth={1.5}
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z"
    />
    <Path
      stroke="#1F2336"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.242 17v-5c0-.471 0-.707-.146-.854-.147-.146-.382-.146-.854-.146"
    />
    <Path
      stroke="#1F2336"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.992 8h.009"
    />
  </Svg>
)
export default ReasonIcon
