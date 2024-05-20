import React from "react";
import { useNavigation } from "@react-navigation/native";
import RefuelingScreen from "./RefuelingScreen";

const RefuelingContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <RefuelingScreen navigate={navigate} />;
};

export default RefuelingContainer;
