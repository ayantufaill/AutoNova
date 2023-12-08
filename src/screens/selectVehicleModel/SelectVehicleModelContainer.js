import React from "react";

import SelectVehicleModelScreen from "./SelectVehicleModelScreen";

import { vehicleModels } from "../../utils/mock";

const SelectVehicleModelContainer = () => {
  return <SelectVehicleModelScreen vehicleModels={vehicleModels} />;
};

export default SelectVehicleModelContainer;
