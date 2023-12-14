import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const ClockIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={15}
    fill="none"
    {...props}>
    <Circle
      cx={6.5}
      cy={7.625}
      r={5.625}
      stroke="#F2BEFC"
      strokeWidth={0.938}
    />
    <Path
      stroke="#F2BEFC"
      strokeLinecap="round"
      strokeWidth={0.938}
      d="M6.5 5.125v2.333c0 .104.052.202.14.26l1.735 1.157M9.625.75l2.5 1.875M6.5.75V2M9.625 12.625l.625 1.25M3.375 12.625l-.625 1.25M3.375.75l-2.5 1.875"
    />
  </Svg>
);
export default ClockIcon;
