import { User } from '@/types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.green-api.com';

export const fetchUser = createAsyncThunk<
  User,
  { idInstance: string; apiTokenInstance: string },
  { rejectValue: string }
>(
  'user/getUserData',
  async ({ idInstance, apiTokenInstance }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `${BASE_URL}/waInstance${idInstance}/getWaSettings/${apiTokenInstance}`,
      );

      if (!response.ok) {
        return rejectWithValue(
          'Не получилось сделать запрос, проверьте токен и инстанс',
        );
      }

      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e, 'Не получилось загрузить данные пользователя');
      return rejectWithValue('Не получилось загрузить данные пользователя');
    }
  },
);
