export { createCard }
import { openModal } from "./modal.js";

// @todo: Функция создания карточки
function createCard(data, popupImage, popupCaption, imagePopup) {
  const template = document.querySelector('#card-template').content;
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

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', (event) => {
    event.target.closest('.places__item')?.remove();
  });
}