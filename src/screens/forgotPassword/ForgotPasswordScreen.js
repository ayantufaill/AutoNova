import React from "react";

import { ScaledSheet } from "react-native-size-matters";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

import {
  AuthInput,
  GlobalButton,
  AutoNovaHeader,
  ResetPasswordModal,
} from "../../components";
import { colors } from "../../utils/theme";

import UserIcon from "../../assets/svgs/UserIcon";

const ForgotPasswordScreen = ({ isModalVisible, toggleModal, navigation }) => {
  return (
    <View style={styles.container}>
      <AutoNovaHeader />
      <Text style={styles.title}>Reset your password</Text>
      <Text style={styles.subTitle}>
        Enter the email address associated with your account and we will send
        you a password.
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollWrapper}>
        <AuthInput
          placeholder="Email"
          inputMode="email"
          leftIcon={<UserIcon />}
        />
        <View style={styles.buttonWrapper}>
          <GlobalButton onPress={toggleModal} title="Continue" />
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.sigIn}>Back to Sign In</Text>
        </TouchableOpacity>
        <ResetPasswordModal
          handleClick={toggleModal}
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />
      </ScrollView>
      <View style={styles.alreadyAccountWrapper}>
        <Text style={styles.alreadyAccount}>Don’t have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.forLgin}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: "15@s",
  },
  scrollWrapper: {
    paddingBottom: "20@s",
    marginTop: "7@s",
  },
  title: {
    fontSize: "22@s",
    lineHeight: "27@s",
    fontWeight: "700",
    fontStyle: "normal",
    marginTop: "25@s",
    color: colors.lightBlackColor,
  },
  subTitle: {
    fontSize: "14@s",
    lineHeight: "22@s",
    fontWeight: "400",
    fontStyle: "normal",
    marginTop: "8@s",
    color: colors.lightGreyColor,
  },
  buttonWrapper: {
    marginVertical: "30@s",
  },
  alreadyAccountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "4@s",
    position: "absolute",
    bottom: "15@s",
    right: "0@s",
    left: "0@s",
  },
  alreadyAccount: {
    fontSize: "14@s",
    lineHeight: "22@s",
    fontWeight: "400",
    fontStyle: "normal",
    color: colors.lightBlackColor,
  },
  forLgin: {
    fontSize: "14@s",
    lineHeight: "22@s",
    fontWeight: "500",
    fontStyle: "normal",
    color: colors.blueColor,
  },

  sigIn: {
    fontSize: "14@s",
    lineHeight: "22@s",
    fontWeight: "700",
    fontStyle: "normal",
    textAlign: "center",
    color: colors.blueColor,
  },
});

export default ForgotPasswordScreen;
