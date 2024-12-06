export { openModal, closeModal, closeOnOverlayClick }
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

// @todo: Escape
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closeModal(openedPopup);
    }
  }
}

// @todo: Функция закрытия поп-апа кликом на оверлей
function closeOnOverlayClick(evt) {
  if (evt.target.classList.contains('popup')) {
    closeModal(evt.target);
  }
}