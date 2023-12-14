import React from "react";

import { useNavigation } from "@react-navigation/native";

import VehicleFuelCapacityScreen from "./VehicleFuelCapacityScreen";

const VehicleFuelCapacityContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <VehicleFuelCapacityScreen navigate={navigate} />;
};

export default VehicleFuelCapacityContainer;
