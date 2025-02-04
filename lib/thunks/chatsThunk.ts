import { Chat } from '@/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.green-api.com';

export const fetchContacts = createAsyncThunk<
  Chat[], // тип возвращаемого значения
  { idInstance: string; apiTokenInstance: string }, // Параметры, которые передаем в thunk
  { rejectValue: string }
>(
  'chats/getChats',
  async ({ idInstance, apiTokenInstance }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/waInstance${idInstance}/getContacts/${apiTokenInstance}`,
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
