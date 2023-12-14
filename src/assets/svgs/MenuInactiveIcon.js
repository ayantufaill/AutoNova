import * as React from "react";
import Svg, { Path } from "react-native-svg";
const MenuInactiveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#1F2336"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 5h16M4 12h16M4 19h16"
    />
  </Svg>
);
export default MenuInactiveIcon;
