import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ChartActiveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <Path
      stroke="#536BFC"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.5 14.828c-2.502 5.928-10.636 7.655-15.299 3.036C-.37 13.334 1.045 5.13 7.057 2.5"
    />
    <Path
      stroke="#536BFC"
      strokeWidth={1.5}
      d="M16.683 11.5c1.888 0 2.832 0 3.441-.845.023-.032.06-.088.081-.121.548-.887.266-1.568-.299-2.93a10.182 10.182 0 0 0-5.51-5.51c-1.362-.565-2.043-.847-2.93-.3-.033.021-.09.06-.121.082-.845.61-.845 1.553-.845 3.44v2.111c0 1.92 0 2.88.596 3.477.597.596 1.557.596 3.476.596h2.111Z"
    />
  </Svg>
);
export default ChartActiveIcon;
