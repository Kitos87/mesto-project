import { enableValidation, resetValidation } from './scripts/validate.js';
import { openModal, closeModal, closeOnOverlayClick } from './scripts/modal.js';
import { createCard } from './scripts/card.js';
import { initialCards } from './scripts/cards.js';
import "./pages/index.css";
// @todo: Темплейт карточки


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

// @todo: Функция заполнения полей редактирования профиля
function fillProfileForm() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
}

// @todo: Вывести карточки на страницу
function renderCards() {
  initialCards.forEach((cardData) => {
    const card = createCard(cardData, popupImage, popupCaption, imagePopup);
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
  },
    popupImage,
    popupCaption,
    imagePopup
  );
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

// @todo: Закрытие поп-апов оверлей
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closeModal(popup));
});

// @todo: Обработчик закрытия поп-апа кликом на оверлей
document.querySelectorAll('.popup').forEach((popup) => {
  popup.addEventListener('mousedown', closeOnOverlayClick);
});

enableValidation({
  formSelector: '.popup__form',
});
