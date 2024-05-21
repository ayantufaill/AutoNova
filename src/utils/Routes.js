import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScaledSheet } from 'react-native-size-matters';
import { View, Platform } from 'react-native';

import { colors } from './theme';
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
  TypeOfExpenseContainer,
  ServiceContainer,
  ReportContainer,
  GasStationContainer,
  ReminderContainer,
  NameOfExpensesContainer,
  MoreOptionsContainer,
  ExpenseContainer,
  RefuelingContainer,
  DashboardContainer,
} from '../screens';
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
} from '../assets/svgs';
import SplashScreen from '../screens/splash/SplashScreen';
import ProfileContainer from '../screens/profile/ProfileContainer';

const Stack = createStackNavigator();
const Home = createStackNavigator();
const Tab = createBottomTabNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="splashSreen">
      {/* <Stack.Navigator initialRouteName="dashboard"> */}
      <Stack.Screen
        name="splashSreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
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
      {/* <Stack.Screen
        name="tabs"
        component={MyTabs}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen
        name="dashboard"
        component={DashboardContainer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Reminder"
        component={ReminderContainer}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="typesOfExpenses"
        component={TypeOfExpenseContainer}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="nameOfExpense"
        component={NameOfExpensesContainer}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Service"
        component={ServiceContainer}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Refueling"
        component={RefuelingContainer}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Expense"
        component={ExpenseContainer}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="gasStation"
        component={GasStationContainer}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Reports"
        component={ReportContainer}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="moreOptions"
        component={MoreOptionsContainer}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="My Profile"
        component={ProfileContainer}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'normal',
            color: 'white',
          },
        }}
      />
      <Stack.Screen
        name="CreateNew"
        component={CreateNew}
        options={{ animationEnabled: true }}
      />
    </Stack.Navigator>
  );
};

const CreateNew = () => <View style={{ flex: 1, backgroundColor: 'pink' }} />;

export const HomeStack = () => {
  return (
    <Home.Navigator initialRouteName="homeScreen">
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
          height: Platform.OS === 'ios' ? 65 : 55,
          borderTopWidth: 1,
          borderTopColor: colors.opacityColor,
        },
      }}
    >
      <Tab.Screen
        options={{
          title: '',
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
        screenOptions={{ presentation: 'modal' }}
        options={{
          title: '',
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

      {/* <Tab.Screen
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={styles.plusIconWrapper}>
              {focused ? <PlusActiveIcon /> : <PlusInactiveIcon />}
            </View>
          ),
        }}
        name="Add"
        component={SignInContainer}
      /> */}
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View style={styles.plusIconWrapper}>
              {focused ? <PlusActiveIcon /> : <PlusInactiveIcon />}
            </View>
          ),
        }}
        name="Add"
        component={AddNew}
      />

      <Tab.Screen
        options={{
          title: '',
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
          title: '',
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
        name="MoreOptionsContainer"
        component={MoreOptionsContainer}
      />
    </Tab.Navigator>
  );
}

const styles = ScaledSheet.create({
  activeTab: {
    marginTop: '12@s',
  },
  inactiveTab: {
    marginTop: '12@s',
  },
  plusIconWrapper: {
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
    borderColor: colors.opacityColor,
    borderRadius: '50@s',
    height: '52@s',
    width: '52@s',
    top: '-25@s',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default Auth;
