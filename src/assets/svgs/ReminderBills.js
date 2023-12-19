import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"
const ReminderBills = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Ellipse
      cx={32.292}
      cy={22.917}
      stroke="#fff"
      strokeWidth={3.125}
      rx={13.542}
      ry={4.167}
    />
    <Path
      stroke="#fff"
      strokeWidth={3.125}
      d="M45.833 32.292c0 2.3-6.063 4.166-13.541 4.166-7.48 0-13.542-1.865-13.542-4.166"
    />
    <Path
      stroke="#fff"
      strokeWidth={3.125}
      d="M45.833 22.917V41.25c0 2.531-6.063 4.583-13.541 4.583-7.48 0-13.542-2.052-13.542-4.583V22.917"
    />
    <Ellipse
      cx={17.708}
      cy={8.333}
      stroke="#fff"
      strokeWidth={3.125}
      rx={13.542}
      ry={4.167}
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={3.125}
      d="M12.5 22.917c-3.941-.48-7.563-1.72-8.333-4.167M12.5 33.333c-3.941-.48-7.563-1.72-8.333-4.166"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={3.125}
      d="M12.5 43.75c-3.941-.48-7.563-1.72-8.333-4.167V8.333M31.25 12.5V8.333"
    />
  </Svg>
)
export default ReminderBills
