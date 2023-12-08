import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import {
  IntroContainer,
  SignUpContainer,
  SignInContainer,
  ForgotPasswordContainer,
  AddVehicleContainer,
  SelectVehicleBrandContainer,
  SelectVehicleModelContainer,
} from "../screens";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="selectVehicleModel">
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
      <Stack.Screen
        name="addVehicle"
        component={AddVehicleContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="selectVehicleBrand"
        component={SelectVehicleBrandContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="selectVehicleModel"
        component={SelectVehicleModelContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
