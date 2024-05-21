import { Helpers } from '../BaseUrl/Helper';
import {
  startAddVehicle,
  addVehicleError,
  addVehicleSuccess,
} from '../reducers/addVehicleReducer';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export const addVehicle = (userData) => async (dispatch) => {
  console.log(userData);
  try {
    dispatch(startAddVehicle());
    const authToken = Helpers.AuthTokken;
    console.log('authToken', authToken, userData);
    const response = await axios.post(
      `${Helpers.BaseUrlAutoNova}/vehicle/addVehicle`,
      userData,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response);
    if (response.data) {
      dispatch(addVehicleSuccess());
    } else {
      dispatch(
        addVehicleError(
          response.data ? response.data.message : 'addVehicle failed'
        )
      );
    }
  } catch (error) {
    Toast.show({
      type: 'error',
      position: 'bottom',
      text1: 'Error during addVehicle:',
      text2: 'Something went wrong please try again',
      visibilityTime: 3000,
      autoHide: true,
    });
    dispatch(addVehicleError('addVehicle failed'));
  }
};
