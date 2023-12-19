import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackArrowWhite = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m7.425 7-4.064 4.116a1.261 1.261 0 0 0 0 1.768L7.425 17m-3.702-5H21"
    />
  </Svg>
)
export default BackArrowWhite
