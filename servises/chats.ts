const BASE_URL = 'https://api.green-api.com';

export const getChats = async (
  idInstance: string,
  apiTokenInstance: string,
  phoneNumber: string,
) => {
  // console.log(idInstance, apiTokenInstance, phoneNumber)
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



// export const getChatHistory = async (
//   idInstance: string,
//   apiTokenInstance: string,
//   phoneNumber: string,
// ) => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/waInstance${idInstance}/getChats/${apiTokenInstance}`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           chatId: `${phoneNumber}@c.us`,
//         }),
//       },
//     );

//     if (response.status === 429) {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       return await getChatHistory(idInstance, apiTokenInstance, phoneNumber);
//     }

//     if (!response.ok) {
//       throw new Error(
//         'Не получилось сделать запрос, проверьте токен, инстанс и телефон',
//       );
//     }

//     const data = await response.json();
//     return data;
//   } catch (e) {
//     console.log(e, 'Не получилось загрузить историю сообщений');
//   }
// };
