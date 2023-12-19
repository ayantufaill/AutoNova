import * as React from "react"
import Svg, { Path } from "react-native-svg"
const LanguageIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#1F2336"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 4.966h3.15m3.85 0H9.25m-2.1 0h2.1m-2.1 0V4m2.1.966c-.37 1.32-1.142 2.568-2.025 3.665M4.975 11c.713-.656 1.52-1.46 2.25-2.369m0 0c-.45-.528-1.08-1.381-1.26-1.767m1.26 1.767 1.35 1.403"
    />
    <Path
      stroke="#1F2336"
      strokeWidth={1.5}
      d="M6.022 15.978c.055 1.72.242 2.775.886 3.56a4 4 0 0 0 .554.554C8.57 21 10.212 21 13.5 21c3.288 0 4.931 0 6.038-.908.202-.166.388-.352.554-.554C21 18.43 21 16.788 21 13.5c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554c-.782-.641-1.831-.83-3.538-.885m-9.978 9.955c-1.72-.055-2.775-.242-3.56-.886a4 4 0 0 1-.554-.554C1 13.43 1 11.788 1 8.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C3.57 1 5.212 1 8.5 1c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554c.644.785.831 1.84.886 3.56l.022.001m-9.978 9.955L16 6.023"
    />
    <Path
      stroke="#1F2336"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12 18 .833-2M17 18l-.833-2m-3.334 0 1.667-4 1.667 4m-3.334 0h3.334"
    />
  </Svg>
)
export default LanguageIcon
