import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import GasStationScreen from './GasStationScreen';
const GasStationContainer = () => {
    const navigation = useNavigation();
    const navigate = (route) => {
      navigation.navigate(route);
    };
  
    return <GasStationScreen navigate={navigate} />;
}

export default GasStationContainer