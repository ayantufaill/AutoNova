import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "./HomeScreen";

const HomeContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true; 
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []); 

  return <HomeScreen navigate={navigate} />;
};

export default HomeContainer;
