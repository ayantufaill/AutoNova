import * as React from "react"
import Svg, { Path } from "react-native-svg"
const AddIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 1v16m8-8H1"
    />
  </Svg>
)
export default AddIcon
