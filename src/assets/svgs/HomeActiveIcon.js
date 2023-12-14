import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HomeActiveIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      stroke="#536BFC"
      strokeWidth={1.5}
      d="m9 22-.251-3.509a3.259 3.259 0 1 1 6.501 0L15 22"
    />
    <Path
      stroke="#536BFC"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2.352 13.213c-.354-2.297-.53-3.445-.096-4.464.435-1.018 1.398-1.715 3.325-3.108L7.021 4.6C9.418 2.867 10.617 2 12.001 2c1.382 0 2.58.867 4.978 2.6l1.44 1.041c1.927 1.393 2.89 2.09 3.325 3.108.434 1.019.258 2.167-.095 4.464l-.301 1.96c-.5 3.256-.751 4.884-1.919 5.856-1.168.971-2.875.971-6.29.971H10.86c-3.415 0-5.122 0-6.29-.971-1.168-.972-1.418-2.6-1.918-5.857l-.301-1.959Z"
    />
  </Svg>
);
export default HomeActiveIcon;
