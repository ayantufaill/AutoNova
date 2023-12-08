import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { colors } from "../../utils/theme";

import { BackArrow } from "../../assets/svgs";

const BackArrowHeader = ({ title }) => {
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity>
        <BackArrow />
      </TouchableOpacity>
      <Text style={styles.buttonTitle}>{title}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  buttonWrapper: {
    alignItems: "center",
    flexDirection: "row",
    gap: "10@s",
    marginVertical: "7@s",
  },
  buttonTitle: {
    fontSize: "22@s",
    lineHeight: "28@s",
    fontWeight: "700",
    fontStyle: "normal",
    letterSpacing: "0@s",
    color: colors.lightBlackColor,
  },
});

export default BackArrowHeader;
