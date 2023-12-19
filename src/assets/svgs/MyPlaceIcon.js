import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MyPlaceIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1F2336"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4 17c-1.829.412-3 1.044-3 1.754C1 19.994 4.582 21 9 21s8-1.006 8-2.246c0-.71-1.171-1.342-3-1.754"
    />
    <Path
      stroke="#1F2336"
      strokeWidth={1.5}
      d="M11.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
    />
    <Path
      stroke="#1F2336"
      strokeWidth={1.5}
      d="M10.257 16.494a1.813 1.813 0 0 1-2.514 0C4.654 13.5.515 10.158 2.533 5.304 3.626 2.679 6.246 1 9 1c2.755 0 5.375 1.68 6.467 4.304 2.016 4.847-2.113 8.207-5.21 11.19Z"
    />
  </Svg>
)
export default MyPlaceIcon
