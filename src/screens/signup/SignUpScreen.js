import React,{useEffect, useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from "react-native-size-matters";
import { View, Text, ScrollView, TouchableOpacity,ActivityIndicator } from "react-native";
import { signup } from "../../actions/singupActions";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  AuthInput,
  GlobalButton,
  SocialButton,
  AutoNovaHeader,
} from "../../components";
import { colors } from "../../utils/theme";

import UserIcon from "../../assets/svgs/UserIcon";
import EmailIcon from "../../assets/svgs/EmailIcon";
import Toast from "react-native-toast-message";

const SignUpScreen = ({ navigate }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.signup.loading);
  const error = useSelector((state) => state.signup.error);
  const success = useSelector((state) => state.signup.success);

  const [userName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (success) {
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'User created successfully',
        visibilityTime: 3000, 
        autoHide: true,
      });
      navigate('signIn');
    }
    
  }, [success, navigate]);
 

  const handleSignup =  () => {
    if (!userName || !email || !password || !confirmPassword) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Please fill in all fields',
        visibilityTime: 3000, 
        autoHide: true,
      });
      return;
    }
  

    if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Passwords do not match',
        visibilityTime: 3000, 
        autoHide: true,
      });
      return;
    }
    if(password.length && confirmPassword.length > 8){
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Password:',
        text2: 'you can not add more then 8 letters',
        visibilityTime: 3000, 
        autoHide: true,
      });
      return;
    }

    const userData = { userName, email, password, confirmPassword };
    
    dispatch(signup(userData));
  
    
  };
  return (
    <View style={styles.container}>
      <AutoNovaHeader />
      <Text style={styles.title}>Sign Up for an Account</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollWrapper}>
        <AuthInput
          placeholder="Full Name"
          inputMode="text"
          leftIcon={<UserIcon />}
          onChangeText={(text) => setFullName(text)}

        />
        <AuthInput
          placeholder="Email"
          inputMode="email"
          leftIcon={<EmailIcon />}
          onChangeText={(text) => setEmail(text)}

        />
        <AuthInput
          placeholder="Password"
          inputMode="text"
          secureTextEntry={true}
          leftIcon={<UserIcon />}
          onChangeText={(text) => setPassword(text)}

        />
        <AuthInput
          placeholder="Confirm Password"
          inputMode="text"
          secureTextEntry={true}
          leftIcon={<UserIcon />}
          onChangeText={(text) => setConfirmPassword(text)}

        />
        <View style={styles.checkboxWrapper}>
          <Text>#</Text>
          <Text style={styles.description}>
            By creating an account means you agree to the
            <Text style={styles.spanText}> Terms & Conditions</Text> and our
            <Text style={styles.spanText}> Privacy Policy</Text>
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
        {loading ? (
            <ActivityIndicator size="large" color={colors.blueColor} />
          ) : (
            <GlobalButton title="Sign Up" onPress={handleSignup} />
          )}
        </View>
        <View style={styles.borderWrapper}>
          <View style={styles.horizontalBorder} />
          <Text style={styles.socialSignup}>Or sign up with</Text>
          <View style={styles.horizontalBorder} />
        </View>
        <View style={styles.socialButtonWrapper}>
          <SocialButton title="Google" />
        </View>
        <View style={styles.alreadyAccountWrapper}>
          <Text style={styles.alreadyAccount}>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate("signIn");
            }}>
            <Text style={styles.forLgin}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: "7@s",
  },
  description: {
    fontSize: "12@s",
    lineHeight: "18@s",
    fontWeight: "400",
    fontStyle: "normal",
    marginTop: "20@s",
    color: colors.lightGreyColor,
  },
  spanText: {
    fontWeight: "bold",
    color: colors.lightBlackColor,
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
    marginBottom: "50@s",
    padding: "7@s",
  },
  alreadyAccountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "4@s",
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
});

export default SignUpScreen;
