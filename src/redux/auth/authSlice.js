import {createSlice} from '@reduxjs/toolkit';
import {userLogin} from './services';

const initialState = {
  user: null,
  token: null,
  authLoading: false,
  authError: null,
  authSuccess: false,
};

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    removeUser: state => {
      state.authLoading = false;
      state.user = null;
      state.token = null;
      state.authError = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(userLogin.pending, state => {
        state.authLoading = true;
        state.authError = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.authLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.authLoading = false;
        state.authError = action.payload;
      });
  },
});

export const {removeUser} = authSlice.actions;
export default authSlice.reducer;
