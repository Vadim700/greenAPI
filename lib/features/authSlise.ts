import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  idInstance: string;
  apiTokenInstance: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  idInstance: '',
  apiTokenInstance: '',
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, { payload }) => {
      state.idInstance = payload.idInstance;
      state.apiTokenInstance = payload.apiTokenInstance;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.idInstance = '';
      state.apiTokenInstance = '';
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
