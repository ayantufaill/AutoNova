import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    startSignup: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    signupSuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    signupError: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const { startSignup, signupSuccess, signupError } = signupSlice.actions;
export default signupSlice.reducer;
