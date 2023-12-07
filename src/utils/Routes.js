import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import {
  IntroContainer,
  SignUpContainer,
  SignInContainer,
  ForgotPasswordContainer,
} from "../screens";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="signUp">
      <Stack.Screen
        name="intro"
        component={IntroContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signUp"
        component={SignUpContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signIn"
        component={SignInContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPasswordContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
