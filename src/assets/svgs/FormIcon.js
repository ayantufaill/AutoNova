import * as React from "react"
import Svg, { Path } from "react-native-svg"
const FormIcon = (props) => (
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
      strokeWidth={1.5}
      d="M11.5 2h-1C6.022 2 3.782 2 2.391 3.391S1 7.021 1 11.5c0 4.478 0 6.718 1.391 8.109S6.021 21 10.5 21c4.478 0 6.718 0 8.109-1.391C20 18.217 20 15.979 20 11.5v-1"
    />
    <Path
      stroke="#1F2336"
      strokeWidth={1.5}
      d="M21 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
    />
    <Path
      stroke="#1F2336"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6 10h4M6 15h8"
    />
  </Svg>
)
export default FormIcon
