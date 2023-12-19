import React from 'react'
import { useNavigation } from "@react-navigation/native";
import MoreOptionsScreen from './MoreOptionsScreen';
const MoreOptionsContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <MoreOptionsScreen navigate={navigate} />;
}

export default MoreOptionsContainer