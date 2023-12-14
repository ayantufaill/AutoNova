import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { colors } from "../../utils/theme";

import { RightArrow } from "../../assets/svgs";

const SelectArrowButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper} onPress={onPress}>
      <Text style={styles.buttonTitle}>{title}</Text>
      <RightArrow />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.opacityColor,
    paddingVertical: "10@s",
    marginBottom: "7@s",
  },
  buttonTitle: {
    fontSize: "15@s",
    lineHeight: "20@s",
    fontWeight: "500",
    fontStyle: "normal",
    color: colors.lightBlackColor,
  },
});

export default SelectArrowButton;
