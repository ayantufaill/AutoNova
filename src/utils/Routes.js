import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScaledSheet } from "react-native-size-matters";
import { View, Text } from "react-native";

import { colors } from "./theme";
import {
  IntroContainer,
  SignUpContainer,
  SignInContainer,
  ForgotPasswordContainer,
  AddVehicleContainer,
  SelectVehicleBrandContainer,
  SelectVehicleModelContainer,
  VehicleFuelCapacityContainer,
  VehicleDetailsContainer,
  HomeContainer,
} from "../screens";
import {
  HomeActiveIcon,
  HomeInactiveIcon,
  ChartActiveIcon,
  ChartInactiveIcon,
  BellActiveIcon,
  BellInactiveIcon,
  MenuActiveIcon,
  MenuInactiveIcon,
  PlusActiveIcon,
  PlusInactiveIcon,
} from "../assets/svgs";

const Stack = createStackNavigator();
const Home = createStackNavigator();
const Tab = createBottomTabNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="tabs">
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
      <Stack.Screen
        name="vehicleFuelCapacity"
        component={VehicleFuelCapacityContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="vehicleDetails"
        component={VehicleDetailsContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="home"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="tabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Home.Navigator initialRouteName="homeScreen">
      <Home.Screen
        name="vehicleDetails"
        component={VehicleDetailsContainer}
        options={{ headerShown: false }}
      />

      <Home.Screen
        name="homeScreen"
        component={HomeContainer}
        options={{ headerShown: false }}
      />
    </Home.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.whiteColor,
          height: Platform.OS === "ios" ? 65 : 55,
          borderTopWidth: 1,
          borderTopColor: colors.opacityColor,
        },
      }}>
      <Tab.Screen
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.activeTab}>
                  <HomeActiveIcon />
                </View>
              ) : (
                <View style={styles.inactiveTab}>
                  <HomeInactiveIcon />
                </View>
              )}
            </View>
          ),
        }}
        name="home"
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.activeTab}>
                  <ChartActiveIcon />
                </View>
              ) : (
                <View style={styles.inactiveTab}>
                  <ChartInactiveIcon />
                </View>
              )}
            </View>
          ),
        }}
        name="signUp"
        component={SignUpContainer}
      />

      <Tab.Screen
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={styles.plusIconWrapper}>
              {focused ? <PlusActiveIcon /> : <PlusInactiveIcon />}
            </View>
          ),
        }}
        name="signIn"
        component={SignInContainer}
      />

      <Tab.Screen
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.activeTab}>
                  <BellActiveIcon />
                </View>
              ) : (
                <View style={styles.inactiveTab}>
                  <BellInactiveIcon />
                </View>
              )}
            </View>
          ),
        }}
        name="addVehicle"
        component={AddVehicleContainer}
      />
      <Tab.Screen
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              {focused ? (
                <View style={styles.activeTab}>
                  <MenuActiveIcon />
                </View>
              ) : (
                <View style={styles.inactiveTab}>
                  <MenuInactiveIcon />
                </View>
              )}
            </View>
          ),
        }}
        name="forgotPassword"
        component={ForgotPasswordContainer}
      />
    </Tab.Navigator>
  );
}

const styles = ScaledSheet.create({
  activeTab: {
    marginTop: "12@s",
  },
  inactiveTab: {
    marginTop: "12@s",
  },
  plusIconWrapper: {
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
    borderColor: colors.opacityColor,
    borderRadius: "50@s",
    height: "52@s",
    width: "52@s",
    top: "-25@s",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});

export default Auth;
