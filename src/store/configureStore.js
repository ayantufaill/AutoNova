import { configureStore } from '@reduxjs/toolkit';
import signupReducer from '../reducers/signupReducer';
import signInReducer from '../reducers/signInReducer';
import addVehicleReducer from '../reducers/addVehicleReducer';
import getCarDetailsReducer from '../reducers/getCarDetailsReducer';
const store = configureStore({
  reducer: {
    signup: signupReducer,
    signIn: signInReducer,
    addVehicle: addVehicleReducer,
    getCarDetails:getCarDetailsReducer
  },
});

export default store;
