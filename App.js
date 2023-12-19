import React from "react";
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ScaledSheet } from "react-native-size-matters";
import { Provider } from 'react-redux';
import store from "./src/store/configureStore";
import { colors } from "./src/utils/theme";
import Routes from "./src/utils/Routes";
import Toast from 'react-native-toast-message';
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.whiteColor} barStyle="dark-content" />
        <SafeAreaView style={styles.safeArea}>
          <NavigationContainer>
            <Routes />
            <Toast ref={(ref) => Toast.setRef(ref)} />
          </NavigationContainer>
        </SafeAreaView>
      </View>
    </Provider>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    color: colors.whiteColor,
  },
  safeArea: {
    flexGrow: 1,
  },
});
