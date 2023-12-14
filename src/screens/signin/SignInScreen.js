import React from "react";

import { ScaledSheet } from "react-native-size-matters";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Touchable,
} from "react-native";

import {
  AuthInput,
  GlobalButton,
  SocialButton,
  AutoNovaHeader,
} from "../../components";
import { colors } from "../../utils/theme";

import UserIcon from "../../assets/svgs/UserIcon";

const SignInScreen = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <AutoNovaHeader />
      <Text style={styles.title}>Sign In to your Account</Text>
      <Text style={styles.subTitle}>
        Welcome back! please enter your detail
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollWrapper}>
        <AuthInput
          placeholder="Email"
          inputMode="email"
          leftIcon={<UserIcon />}
        />
        <AuthInput
          placeholder="Password"
          inputMode="text"
          secureTextEntry={true}
          leftIcon={<UserIcon />}
        />

        <View style={styles.forgotPasswordWrapper}>
          <View style={styles.rememberMeWrapper}>
            <Text>#</Text>
            <Text style={styles.rememberMe}>Remember me</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigate("forgotPassword");
            }}>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonWrapper}>
          <GlobalButton
            title="Sign In"
            onPress={() => navigate("addVehicle")}
          />
        </View>
        <View style={styles.borderWrapper}>
          <View style={styles.horizontalBorder} />
          <Text style={styles.socialSignup}>Or sign up with</Text>
          <View style={styles.horizontalBorder} />
        </View>
        <View style={styles.socialButtonWrapper}>
          <SocialButton title="Google" />
        </View>
      </ScrollView>
      <View style={styles.alreadyAccountWrapper}>
        <Text style={styles.alreadyAccount}>Don’t have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigate("signUp");
          }}>
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
  borderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: "5@s",
    gap: "12@s",
  },
  horizontalBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.greyColor,
    width: "32%",
  },
  socialSignup: {
    fontSize: "12@s",
    lineHeight: "18@s",
    fontWeight: "400",
    fontStyle: "normal",
    color: colors.steelGreyColor,
  },
  socialButtonWrapper: {
    marginBottom: "10@s",
    padding: "7@s",
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
  forgotPasswordWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10@s",
  },
  rememberMeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: "7@s",
  },
  rememberMe: {
    fontSize: "12@s",
    lineHeight: "19@s",
    fontWeight: "400",
    fontStyle: "normal",
    color: colors.lightBlackColor,
  },
  forgotPassword: {
    fontSize: "12@s",
    lineHeight: "19@s",
    fontWeight: "700",
    fontStyle: "normal",
    color: colors.blueColor,
  },
});

export default SignInScreen;
