import React from "react";

import { useNavigation } from "@react-navigation/native";

import TypeOfExpenseScreen from "./TypeOfExpenseScreen";

const TypeOfExpenseContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <TypeOfExpenseScreen navigate={navigate} />;
};

export default TypeOfExpenseContainer;
