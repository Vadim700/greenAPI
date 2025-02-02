const BASE_URL = 'https://api.green-api.com';

export const sendMessage = async (
  idInstance: string,
  apiTokenInstance: string,
  phoneNumber: string,
  message: string,
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/waInstance${idInstance}/SendMessage/${apiTokenInstance}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chatId: `${phoneNumber}@c.us`,
          message,
        }),
      },
    );

    if (!response.ok) {
      throw new Error('Не получилось отправить сообщение');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export const receiveNotification = async (
  idInstance: string,
  apiTokenInstance: string,
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/waInstance${idInstance}/ReceiveNotification/${apiTokenInstance}`,
      {
        method: 'GET',
      },
    );

    if (!response.ok) {
      throw new Error('Не получиловь получить уведомление');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error receiving notification:', error);
    throw error;
  }
};

export const deleteNotification = async (
  idInstance: string,
  apiTokenInstance: string,
  receiptId: number,
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/waInstance${idInstance}/DeleteNotification/${apiTokenInstance}/${receiptId}`,
      {
        method: 'DELETE',
      },
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error deleting notification:', error);
    throw error;
  }
};
