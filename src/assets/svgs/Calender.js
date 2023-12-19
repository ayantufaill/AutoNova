import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"
const Calender = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Rect
      width={18.375}
      height={18.375}
      x={3.063}
      y={3.573}
      stroke="#64748B"
      strokeWidth={1.531}
      rx={4.083}
    />
    <Path
      stroke="#64748B"
      strokeLinejoin="round"
      strokeWidth={1.531}
      d="M3.063 8.677h18.375"
    />
    <Path
      stroke="#64748B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.531}
      d="M16.844 2.042v3.062M7.656 2.042v3.062M6.636 12.76h1.02M11.74 12.76h1.02M16.844 12.76h1.02M6.636 16.844h1.02M11.74 16.844h1.02M16.844 16.844h1.02"
    />
  </Svg>
)
export default Calender
