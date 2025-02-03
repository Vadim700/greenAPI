import { User } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUser } from '../thunks/userThunk';

interface UserState {
  user: User;
  loading: boolean;
  error: string | null;
}

const initialUserState: User = {
  avatar: '',
  phone: '',
  stateInstance: '',
  deviceId: '',
};

const initialState: UserState = {
  user: initialUserState,
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
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

export const {} = userSlice.actions;

export default userSlice.reducer;
