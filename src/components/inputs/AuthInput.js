import React from "react";

import { View, TextInput } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { colors } from "../../utils/theme";

const AuthInput = ({
  placeholder,
  inputMode,
  leftIcon,
  rightIcon,
  secureTextEntry,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <View style={styles.iconWrapper}>
        {leftIcon}
        <TextInput
          style={styles.authInput}
          placeholder={placeholder}
          placeholderTextColor={colors.darkGreyColor}
          inputMode={inputMode}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {rightIcon}
    </View>
  );
};

const styles = ScaledSheet.create({
  inputWrapper: {
    marginTop: "20@s",
    borderWidth: 1,
    borderColor: colors.greyColor,
    borderRadius: "12@s",
    height: "45@s",
    paddingHorizontal: "12@s",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  authInput: {
    marginLeft: "5@s",
    padding: "0@s",
    width: "83%",
    color: colors.blackColor,
    fontSize: "14@s",
    lineHeight: "22@s",
    fontWeight: "400",
  },
});

export default AuthInput;
