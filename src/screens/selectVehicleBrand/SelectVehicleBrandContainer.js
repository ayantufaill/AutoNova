import React from "react";

import { useNavigation } from "@react-navigation/native";

import SelectVehicleBrandScreen from "./SelectVehicleBrandScreen";
import { vehicleBrands } from "../../utils/mock";

const SelectVehicleBrandContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return (
    <SelectVehicleBrandScreen
      vehicleBrands={vehicleBrands}
      navigate={navigate}
    />
  );
};

export default SelectVehicleBrandContainer;
