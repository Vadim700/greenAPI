import { createSlice } from '@reduxjs/toolkit';

interface MessageInterface {
	chatId: string;
  type: string;
  textMessage: string;
  timestamp: number;
  senderName?: string;
}

type ChatHistory = {
  messanges: MessageInterface[];
};

const initialState: ChatHistory = {
  messanges: [],
};

export const messageSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setChatHistory: (state, { payload }) => {
			state.messanges = payload;
      console.log(payload, '>>> payload');
    },
  },
});

export const { setChatHistory } = messageSlice.actions;

export default messageSlice.reducer;
