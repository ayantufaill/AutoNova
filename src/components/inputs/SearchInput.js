import React from "react";

import { View, TextInput } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { colors } from "../../utils/theme";

import { SearchIcon } from "../../assets/svgs";

const SearchInput = () => {
  return (
    <View style={styles.inputWrapper}>
      <SearchIcon />
      <TextInput
        style={styles.authInput}
        placeholder="Search"
        placeholderTextColor={colors.extraLightGreyColor}
        inputMode="text"
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  inputWrapper: {
    marginTop: "20@s",
    borderRadius: "9@s",
    height: "45@s",
    paddingHorizontal: "12@s",
    flexDirection: "row",
    alignItems: "center",
    gap: "7@s",
    backgroundColor: colors.offWhiteColor,
  },
  authInput: {
    color: colors.blackColor,
    fontSize: "14@s",
    lineHeight: "18@s",
    fontWeight: "400",
    width: "90%",
  },
});

export default SearchInput;
