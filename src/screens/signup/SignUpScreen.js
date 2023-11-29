import React from "react";

import { ScaledSheet } from "react-native-size-matters";
import { View, Text } from "react-native";

import { colors } from "../../utils/theme";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SignUp Screen</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: "15@s",
  },
});

export default SignUpScreen;
