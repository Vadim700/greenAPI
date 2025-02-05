const BASE_URL = 'https://api.green-api.com';

export const getAvatar = async (
  idInstance: string,
  apiTokenInstance: string,
  phoneNumber: string,
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/waInstance${idInstance}/getAvatar/${apiTokenInstance}`,
      {
        method: 'POST',
        body: JSON.stringify({
          chatId: `${phoneNumber}@c.us`,
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Нет доступа к этому API');
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e, 'Попоытка получить аватар провалилась :(');
  }
};

export const checkWhatsapp = async (
  idInstance: string,
  apiTokenInstance: string,
  phoneNumber: string,
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/waInstance${idInstance}/checkWhatsapp/${apiTokenInstance}`,

      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber,
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Проверьте введенные данные');
    }

    const data = response.json();
    return data;
  } catch (e) {
    console.error(e, 'Не получилось проверить наличие WhatsApp у пользователя');
  }
};
