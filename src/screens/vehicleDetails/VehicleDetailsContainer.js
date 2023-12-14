import React from "react";

import { useNavigation } from "@react-navigation/native";

import VehicleDetailsScreen from "./VehicleDetailsScreen";

const VehicleDetailsContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <VehicleDetailsScreen navigate={navigate} />;
};

export default VehicleDetailsContainer;
