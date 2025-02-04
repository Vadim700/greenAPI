import { User, UserState } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUser } from '../thunks/userThunk';

const initialUserState: User = {
  avatar: '',
  phone: '',
  stateInstance: '',
  deviceId: '',
  name: '',
  id: '',
};

const initialState: UserState = {
  user: initialUserState,
  loading: false,
  error: null,
  currentUser: {
    name: '',
    avatar: '',
    phone: '',
    stateInstance: '',
    deviceId: '',
    id: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSelectedUser: (
      state,
      action: PayloadAction<{ name: string; id: string }>,
    ) => {
      state.currentUser = {
        ...state.currentUser,
        name: action.payload.name,
        id: action.payload.id,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export const { setSelectedUser } = userSlice.actions;

export default userSlice.reducer;
