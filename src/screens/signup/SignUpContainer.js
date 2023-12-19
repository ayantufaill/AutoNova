import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import SignUpScreen from "./SignUpScreen";

const SignUpContainer = () => {
  const navigation = useNavigation();

  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <SignUpScreen navigate={navigate} />;
};

export default SignUpContainer;
