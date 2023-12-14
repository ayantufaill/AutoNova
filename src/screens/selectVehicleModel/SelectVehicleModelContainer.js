import React from "react";

import { useNavigation } from "@react-navigation/native";

import SelectVehicleModelScreen from "./SelectVehicleModelScreen";
import { vehicleModels } from "../../utils/mock";

const SelectVehicleModelContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return (
    <SelectVehicleModelScreen
      vehicleModels={vehicleModels}
      navigate={navigate}
    />
  );
};

export default SelectVehicleModelContainer;
