import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import ServiceScreen from './ServiceScreen';

const ServiceContainer = () => {
    const navigation = useNavigation();
    const navigate = (route) => {
      navigation.navigate(route);
    };
  
    return <ServiceScreen navigate={navigate} />;

}

export default ServiceContainer