import { Chat } from '@/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.green-api.com';

export const fetchChats = createAsyncThunk<
  Chat[],
  { idInstance: string; apiTokenInstance: string; phoneNumber: string }, // Параметры, которые передаем в thunk
  { rejectValue: string }
>(
  'chats/getChats',
  async (
    { idInstance, apiTokenInstance, phoneNumber },
    { rejectWithValue },
  ) => {
    try {
      const response = await fetch(
        `${BASE_URL}/waInstance${idInstance}/getChats/${apiTokenInstance}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chatId: `${phoneNumber}@c.us`,
          }),
        },
      );

      if (response.status === 429) {
        return rejectWithValue('Превышено максимальное число запросов');
      }

      if (!response.ok) {
        return rejectWithValue(
          'Не получилось сделать запрос, проверьте токен, инстанс и телефон',
        );
      }

      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e, 'Не получилось загрузить список чатов');
      return rejectWithValue('Не получилось загрузить список чатов');
    }
  },
);
