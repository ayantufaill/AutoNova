
import { Helpers } from '../BaseUrl/Helper';
import { startGetCarDetials,getCarDetialsError,getCarDetialsSuccess } from '../reducers/getCarDetailsReducer';
import axios from 'axios';
import Toast from 'react-native-toast-message'

export const getCarDetials = () => async (dispatch) => {
  try {
    dispatch(startGetCarDetials());
    const authToken = Helpers.AuthTokken;
    const response = await axios.get(`${Helpers.BaseUrlAutoNova}/car/id`, {
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json', 
      },
    });
    

    if (response && response.data.car) {
      dispatch(getCarDetialsSuccess(response.data));
      
    } else {
      dispatch(getCarDetialsError(response.data ? response.data.message : 'getCarDetials failed'));
    }
  } catch (error) {
    Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Error during getCarDetials:',
        text2: 'Something went wrong please try again',
        visibilityTime: 3000, // 3 seconds
        autoHide: true,
      });
    dispatch(getCarDetialsError('getCarDetials failed'));
  }
};

  
