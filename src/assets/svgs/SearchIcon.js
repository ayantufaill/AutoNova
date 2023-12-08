import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SearchIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      stroke="#8D8D8D"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15 15-3.378-3.378m0 0a6.221 6.221 0 1 0-8.798-8.799 6.221 6.221 0 0 0 8.798 8.8Z"
    />
  </Svg>
);
export default SearchIcon;
