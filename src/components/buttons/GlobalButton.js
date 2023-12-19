import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { colors } from "../../utils/theme";

const GlobalButton = ({ title, customClass,customTextStyle, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonWrapper, { ...customClass }]}>
          <Text style={[styles.buttonTitle, { ...customTextStyle }]}>{title}</Text>

    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  buttonWrapper: {
    backgroundColor: colors.blueColor,
    height: "45@s",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "12@s",
  },
  buttonTitle: {
    fontSize: "16@s",
    lineHeight: "22@s",
    fontWeight: "700",
    fontStyle: "normal",
    letterSpacing: "0.2@s",
    color: colors.whiteColor,
  },
});

export default GlobalButton;
