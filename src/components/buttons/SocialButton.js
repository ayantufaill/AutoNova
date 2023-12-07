import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { colors } from "../../utils/theme";

import { GoogleIcon } from "../../assets/svgs";

const SocialButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.buttonWrapper}>
      <GoogleIcon />
      <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  buttonWrapper: {
    borderWidth: 1,
    gap: "8@s",
    marginTop: "20@s",
    height: "47@s",
    borderRadius: "12@s",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors.greyColor,
    shadowColor: colors.blackColor,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10,
  },
  buttonTitle: {
    fontSize: "14@s",
    lineHeight: "22@s",
    fontWeight: "700",
    fontStyle: "normal",
    letterSpacing: "0.1@s",
    color: colors.lightBlackColor,
  },
});

export default SocialButton;
