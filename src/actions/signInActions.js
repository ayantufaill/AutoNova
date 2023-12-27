import { Helpers } from "../BaseUrl/Helper";
import {
  startSignIn,
  signInError,
  signInSuccess,
} from "../reducers/signInReducer";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
export const signIn = (userData) => async (dispatch) => {
  try {
    dispatch(startSignIn());
    const response = await axios.post(
      `${Helpers.BaseUrlAutoNova}/login`,
      userData
    );
    if (response.data) {
      dispatch(signInSuccess());
      Helpers.AuthTokken = response.data.token;
      await AsyncStorage.setItem("BrearTokken", response.data.token);
    } else {
      dispatch(
        signInError(response.data ? response.data.message : "SignIn failed")
      );
    }
  } catch (error) {
    console.log(error);
    Toast.show({
      type: "error",
      position: "bottom",
      text1: "Error during signIn:",
      text2: "Something went wrong please try again",
      visibilityTime: 3000, // 3 seconds
      autoHide: true,
    });
    dispatch(signInError("SignIn failed"));
  }
};
