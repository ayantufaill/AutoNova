import * as React from "react";
import Svg, { Path } from "react-native-svg";
const DistanceSmallIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#94A3B8"
      d="M7.5 13.625a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25Zm0 .938a6.563 6.563 0 1 1 0-13.126 6.563 6.563 0 0 1 0 13.126Z"
    />
    <Path
      fill="#94A3B8"
      d="M2.813 8a4.687 4.687 0 1 1 9.374 0 .469.469 0 0 1-.937 0 3.75 3.75 0 0 0-7.5 0 .469.469 0 0 1-.938 0Z"
    />
    <Path
      fill="#94A3B8"
      d="M8.356 9.697a1.406 1.406 0 1 1-.892-.29l.894-2.751a.469.469 0 1 1 .891.29l-.893 2.75v.001ZM7.355 11.26a.469.469 0 1 0 .29-.892.469.469 0 0 0-.29.892Z"
    />
  </Svg>
);
export default DistanceSmallIcon;
