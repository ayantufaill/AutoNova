import { Helpers } from '../BaseUrl/Helper';
import { startSignup, signupSuccess, signupError } from '../reducers/signupReducer';
import axios from 'axios';
import Toast from 'react-native-toast-message'


export const signup = (userData) => async (dispatch) => {
    try {
      dispatch(startSignup());
      const response = await axios.post(`${Helpers.BaseUrlAutoNova}/register`, userData);
      console.log(response.data);
  
      if (response.data) {
        dispatch(signupSuccess());
      
      } else {
        dispatch(signupError(response.data ? response.data.message : 'Signup failed'));
      }
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error during signup:',
        text2: 'Something went wrong please try again',
        visibilityTime: 3000, // 3 seconds
        autoHide: true,
      });
      dispatch(signupError('Signup failed'));
    }
  };
  
