import { View, Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from './theme';
import { HomeStack } from './Routes';
import {
  SignUpContainer,
  AddVehicleContainer,
  MoreOptionsContainer,
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
} from '../assets/svgs';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
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
};

export default BottomTabs;

const styles = ScaledSheet.create({
  activeTab: {
    marginTop: '12@s',
  },
  inactiveTab: {
    marginTop: '12@s',
  },
  plusIconWrapper: {
    backgroundColor: colors.blackColor,
    borderWidth: 1,
    borderColor: colors.opacityColor,
    borderRadius: '50@s',
    height: '52@s',
    width: '52@s',
    top: '25@s',
    zIndex: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
