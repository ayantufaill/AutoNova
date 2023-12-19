import { createSlice } from '@reduxjs/toolkit';

const signInSlice = createSlice({
  name: 'signIn',
  initialState: {
    loading: false,
    success: false,
    error: null,
  },
  reducers: {
    startSignIn: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },
    signInSuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },
    signInError: (state, action) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },
  },
});

export const { startSignIn, signInSuccess, signInError } = signInSlice.actions;
export default signInSlice.reducer;
