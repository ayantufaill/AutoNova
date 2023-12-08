import * as React from "react";
import Svg, { Path } from "react-native-svg";
const RightArrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={12}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      d="m6.716 5.294-5-5a1.004 1.004 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 .325 1.639 1 1 0 0 0 1.095-.219l5-5a1 1 0 0 0 0-1.42Z"
    />
  </Svg>
);
export default RightArrow;
