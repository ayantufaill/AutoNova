import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LocationPointer = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#64748B"
      strokeWidth={1.5}
      d="M13.618 21.367A2.366 2.366 0 0 1 12 22a2.366 2.366 0 0 1-1.617-.633c-3.971-3.741-9.293-7.92-6.698-13.987C5.09 4.1 8.458 2 12.001 2c3.543 0 6.912 2.1 8.315 5.38 2.592 6.06-2.717 10.259-6.698 13.987Z"
    />
    <Path
      stroke="#64748B"
      strokeWidth={1.5}
      d="M15.5 11a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
    />
  </Svg>
)
export default LocationPointer
