import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { IntroContainer } from "../screens";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="intro">
      <Stack.Screen
        name="intro"
        component={IntroContainer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Auth;
