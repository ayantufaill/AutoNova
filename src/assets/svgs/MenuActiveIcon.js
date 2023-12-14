import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MenuActiveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={16}
    fill="none"
    {...props}>
    <Path
      stroke="#536BFC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1 1h16M1 8h16M1 15h16"
    />
  </Svg>
);
export default MenuActiveIcon;
