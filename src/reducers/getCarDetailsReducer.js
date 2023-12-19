import { createSlice } from '@reduxjs/toolkit';

const getCarDetailsSlice = createSlice({
  name: 'getCarDetails',
  initialState: {
    loading: false,
    success: false,
    error: null,
    carDetails: null,
  },
  reducers: {
    startGetCarDetials: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    getCarDetialsSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = null;
      state.carDetails = action.payload;
    },
    getCarDetialsError: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const { startGetCarDetials, getCarDetialsSuccess, getCarDetialsError } = getCarDetailsSlice.actions;
export default getCarDetailsSlice.reducer;
