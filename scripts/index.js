import { enableValidation, resetValidation } from './validate.js';

// @todo: Темплейт карточки
const template = document.querySelector('#card-template').content;

// @todo: DOM узлы
const cardList = document.querySelector('.places__list');
const profilePopup = document.querySelector('.popup_type_edit');
const cardPopup = document.querySelector('.popup_type_new-card');
const profileEditButton = document.querySelector('.profile__edit-button');
const cardAddButton = document.querySelector('.profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close');
const imagePopup = document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

// @todo: Профиль
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileFormElement = document.forms['edit-profile'];
const nameInput = profileFormElement.elements.name;
const jobInput = profileFormElement.elements.description;

// @todo: Добавление карточки
const cardFormElement = document.forms['new-place'];
const placeInput = cardFormElement.elements['place-name'];
const linkInput = cardFormElement.elements.link;

// @todo: Функция создания карточки
function createCard(data) {
  const cardElement = template.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like-button_is-active');
  });
    
  deleteCard(cardElement);
  
  cardImage.addEventListener('click', () => {
    popupImage.src = data.link;
    popupImage.alt = data.name;
    popupCaption.textContent = data.name;
    openModal(imagePopup);
  });
  
  return cardElement;
}

// @todo: Функция открытия поп-апа
function openModal(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEsc);
}

// @todo: Функция закрытия поп-апа
function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  document.addEventListener('keydown', closeByEsc);
}

// @todo: Функция заполнения полей редактирования профиля
function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', (event) => {
    event.target.closest('.places__item')?.remove();
  });
}
  
  
// @todo: Вывести карточки на страницу
function renderCards() {
  initialCards.forEach((cardData) => {
    const card = createCard(cardData);
    cardList.append(card);
  });
}

renderCards();

// @todo: Обработчики для поп-апа редактирования профиля
profileEditButton.addEventListener('click', () => {
  fillProfileForm();
  resetValidation(profileFormElement);
  openModal(profilePopup);
});

// @todo: Обработчик для редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(profilePopup);
}

// @todo: Обработчик отправки формы редактирования профиля
profileFormElement.addEventListener('submit', handleProfileFormSubmit);

// @todo: Обработчики для поп-апа добавления карточки
cardAddButton.addEventListener('click', () => {
  cardFormElement.reset();
  resetValidation(cardFormElement);
  openModal(cardPopup);
});

// @todo: Обработчик добавления новой карточки
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const newCard = createCard({
    name: placeInput.value,
    link: linkInput.value,
  });
  cardList.prepend(newCard);
  closeModal(cardPopup);
}

// @todo: Обработчик добавления карточки
cardFormElement.addEventListener('submit', handleCardFormSubmit);

// @todo: Закрытие поп-апов при клике на закрытие
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closeModal(popup));
});

// @todo: Escape
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

enableValidation({
  formSelector: '.popup__form',
});
