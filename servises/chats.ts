const BASE_URL = 'https://api.green-api.com';

export const getChats = async (
  idInstance: string,
  apiTokenInstance: string,
  phoneNumber: string,
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
      throw new Error('Превышено максимальное число запросов');
    }

    if (!response.ok) {
      throw new Error(
        'Не получилось сделать запрос, проверьте токен, инстанс и телефон',
      );
    }

    const data = response.json();
    return data;
  } catch (e) {
    console.log(e, 'Не получилось загрузить список чатов');
  }
};

export const getChatHystory = async (
  idInstance: string,
  apiTokenInstance: string,
  chatId: string,
  count: number = 0,
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
      {
        method: 'POST',
        body: JSON.stringify({
          chatId,
          count,
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Не получилось сделать запрос за историей чатов');
    }

    return response.json();
  } catch (e) {
    console.log(e, 'Не получилось получить историю чатов');
  }
};
