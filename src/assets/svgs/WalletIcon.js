import * as React from "react"
import Svg, { Path } from "react-native-svg"
const WalletIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1F2336"
      strokeWidth={1.5}
      d="M15 13a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0ZM17.9 7a5 5 0 1 0-9.8 0"
    />
    <Path
      stroke="#1F2336"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6 6.993h9c2.828 0 4.243 0 5.121.88.879.878.879 2.293.879 5.123v2.001c0 2.83 0 4.245-.879 5.124C19.243 21 17.828 21 15 21H9c-3.771 0-5.657 0-6.828-1.172C1 18.656 1 16.769 1 12.996v-2c0-3.774 0-5.66 1.172-6.833C3.115 3.22 4.52 3.036 7 3h2"
    />
  </Svg>
)
export default WalletIcon
