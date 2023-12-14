import * as React from "react";
import Svg, { Path } from "react-native-svg";
const PlusInactiveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <Path
      stroke="#1F2336"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.5 11c0-4.478 0-6.718 1.391-8.109S6.521 1.5 11 1.5c4.478 0 6.718 0 8.109 1.391S20.5 6.521 20.5 11c0 4.478 0 6.718-1.391 8.109C17.717 20.5 15.479 20.5 11 20.5c-4.478 0-6.718 0-8.109-1.391C1.5 17.717 1.5 15.479 1.5 11Z"
    />
    <Path
      stroke="#1F2336"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 7v8m4-4H7"
    />
  </Svg>
);
export default PlusInactiveIcon;
