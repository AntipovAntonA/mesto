export const popupAvatarContainer = document.forms['update-avatar'];

export const buttonSubmitEditAvatar = popupAvatarContainer.querySelector('.popup__button');

export const popupConfirmCardDelete = document.forms['confirm'];

export const buttonUpdateAvatar = document.querySelector('.profile__avatar-container');

export const editFormModalWindow = document.forms['profile-form'];

export const cardFormModalWindow = document.forms['card-form'];

export const buttonOpenProfilePopup = document.querySelector('.profile-info__edit-button');

export const profileAvatarImage = document.querySelector('.profile__avatar');

//находим инпут для ввода имени профиля
export const nameImput = document.querySelector('.popup__input_type_name');

//находим инпут для ввода информации о профиле
export const jobInput = document.querySelector('.popup__input_type_about');

export const cardsButtonOpen = document.querySelector('.profile__add-button');

export const buttonEsc = 'Escape';

export const selectors = {
  formSelector: '.popup__section',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: '.popup__input-error',
  errorClass: 'popup__input-error_active',
  redLineInputError: 'popup__input_red-line'
};