import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import ReportScreen from './ReportScreen';
const ReportContainer = () => {
    const navigation = useNavigation();
    const navigate = (route) => {
      navigation.navigate(route);
    };
  
    return <ReportScreen navigate={navigate} />;
}

export default ReportContainer