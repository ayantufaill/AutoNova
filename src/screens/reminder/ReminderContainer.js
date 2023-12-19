import React from 'react'
import { useNavigation } from "@react-navigation/native";
import ReminderScreen from './ReminderScreen';
const ReminderContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <ReminderScreen navigate={navigate} />;
}

export default ReminderContainer
