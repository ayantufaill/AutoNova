import React from "react";

import { useNavigation } from "@react-navigation/native";

import HomeScreen from "./HomeScreen";

const HomeContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <HomeScreen navigate={navigate} />;
};

export default HomeContainer;
