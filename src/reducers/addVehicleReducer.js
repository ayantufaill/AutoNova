import { createSlice } from '@reduxjs/toolkit';

const addVehicleSlice = createSlice({
  name: 'addVehicle',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    startAddVehicle: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    addVehicleSuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    addVehicleError: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const { startAddVehicle, addVehicleSuccess, addVehicleError } = addVehicleSlice.actions;
export default addVehicleSlice.reducer;
