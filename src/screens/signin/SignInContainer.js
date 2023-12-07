import React from "react";

import { useNavigation } from "@react-navigation/native";

import SignInScreen from "./SignInScreen";

const SignInContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <SignInScreen navigate={navigate} />;
};

export default SignInContainer;
