const apiConfig = {
    baseUrl: "https://nomoreparties.co/v1/frontend-st-cohort-201",
    headers: {
      authorization: "3ec29521-859f-4293-af83-93da763723f5",
      "Content-Type": "application/json",
    },
  };
  
// Проверка ответа
function handleResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}
  
// Загрузка данных пользователя
export function getUserInfo() {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
        headers: apiConfig.headers,
    }).then(handleResponse);
}
  
// Загрузка карточек
export function getInitialCards() {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        headers: apiConfig.headers,
    }).then(handleResponse);
}
  
// Добавление новой карточки
export function addCard(data) {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        method: "POST",
        headers: apiConfig.headers,
        body: JSON.stringify({
        name: data.name,
        link: data.link,
        }),
    }).then(handleResponse);
}
  
// Удаление карточки
export function deleteCard(cardId) {
    return fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: apiConfig.headers,
    }).then(handleResponse);
}
  
// Установить лайк
export function likeCard(cardId) {
    return fetch(`${apiConfig.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: apiConfig.headers,
    }).then(handleResponse);
  }
  
// Убрать лайк
export function dislikeCard(cardId) {
    return fetch(`${apiConfig.baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: apiConfig.headers,
    }).then(handleResponse);
}
  
// Обновление аватара пользователя
export function updateAvatar(avatarUrl) {
    return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: apiConfig.headers,
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    }).then(handleResponse);
  }
  
// Обновление данных пользователя
export function updateUserInfo(userData) {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
      method: "PATCH",
      headers: apiConfig.headers,
      body: JSON.stringify({
        name: userData.name,
        about: userData.about,
      }),
    }).then(handleResponse);
  }
  