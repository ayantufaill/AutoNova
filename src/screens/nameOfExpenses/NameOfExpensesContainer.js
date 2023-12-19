import React from 'react'
import { useNavigation } from "@react-navigation/native";
import NameOfExpensesScreen from './NameOfExpensesScreen';
const NameOfExpensesContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <NameOfExpensesScreen navigate={navigate} />;
}

export default NameOfExpensesContainer