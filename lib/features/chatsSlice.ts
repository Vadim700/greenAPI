import { Chat } from '@/types/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchChats } from '../thunks/chatsThunk';

interface ChatState {
  chats: Chat[];
  status: 'start' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ChatState = {
  chats: [],
  status: 'start',
  error: null,
};

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChats.fulfilled, (state, { payload }) => {
        state.chats = payload;
      });
  },
});

export const {} = chatsSlice.actions;

export default chatsSlice.reducer;
