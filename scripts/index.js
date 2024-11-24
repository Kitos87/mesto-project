// @todo: Темплейт карточки
const template = document.querySelector('#card-template').content;
// @todo: DOM узлы

// @todo: Функция создания карточки
const cardList = document.querySelector('.places__list');
function createCard(data) {
  const cardElement = template.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  return cardElement;
}
// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
function renderCards() {
    initialCards.forEach((cardData) => {
      const card = createCard(cardData);
      cardList.append(card);
    });
  }
  
  renderCards();
