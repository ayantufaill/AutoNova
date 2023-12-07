import React from "react";

import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { colors } from "../../utils/theme";

import { AutoNovaIcon } from "../../assets/svgs";

const AutoNovaHeader = () => {
  return (
    <View style={styles.buttonWrapper}>
      <AutoNovaIcon />
      <Text style={styles.buttonTitle}>AutoNova</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  buttonWrapper: {
    alignItems: "center",
    flexDirection: "row",
    gap: "5@s",
    marginVertical: "10@s",
  },
  buttonTitle: {
    fontSize: "19@s",
    lineHeight: "24@s",
    fontWeight: "700",
    fontStyle: "normal",
    letterSpacing: "0@s",
    color: colors.lightBlackColor,
  },
});

export default AutoNovaHeader;
