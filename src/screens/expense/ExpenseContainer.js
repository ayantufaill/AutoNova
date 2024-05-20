import React from "react";
import { useNavigation } from "@react-navigation/native";
import ExpenseScreen from "./ExpenseScreen";

const ExpenseContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <ExpenseScreen navigate={navigate} />;
};

export default ExpenseContainer;
