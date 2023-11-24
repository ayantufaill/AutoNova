import React from "react";

import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { colors } from "./src/utils/theme";
import Routes from "./src/utils/Routes";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.whiteColor} barStyle="dark-content" />
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.whiteColor,
  },
  safeArea: {
    flexGrow: 1,
  },
});
