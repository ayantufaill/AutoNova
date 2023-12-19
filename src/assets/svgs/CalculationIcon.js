import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CalculationIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1F2336"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.5 2v5M7 4.5H2M7 15l-2 2m0 0-2 2m2-2 2 2m-2-2-2-2M19 5h-4M19 17.5h-4m4-3h-4M21 11H1M11 21V1"
    />
  </Svg>
)
export default CalculationIcon
