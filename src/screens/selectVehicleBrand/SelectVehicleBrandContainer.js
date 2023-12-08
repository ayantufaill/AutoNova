import React from "react";

import SelectVehicleBrandScreen from "./SelectVehicleBrandScreen";

import { vehicleBrands } from "../../utils/mock";

const SelectVehicleBrandContainer = () => {
  return <SelectVehicleBrandScreen vehicleBrands={vehicleBrands} />;
};

export default SelectVehicleBrandContainer;
