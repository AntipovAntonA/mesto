//находим блок popup
export const windowModal = document.querySelectorAll('.popup');

export const popupTypeProfile = document.querySelector('.popup_type_profile');

export const popupCards = document.querySelector('.popup_type_card-add');

export const editFormModalWindow = popupTypeProfile.querySelector('.popup__container');

export const cardFormModalWindow = popupCards.querySelector('.popup__container');

export const popupTypePicture = document.querySelector('.popup_type_picture');

export const buttonSubmitPopupTypeCardAdd = popupCards.querySelector('.popup__button');

export const buttonSubmitPopupTypeProfile = popupTypeProfile.querySelector('.popup__button');

export const buttonSubmitPopup = document.querySelector('.popup__button');

//находим кнопку редактирования профиля
export const buttonOpenProfilePopup = document.querySelector('.profile-info__edit-button');

//находим крестик
export const buttonClosePopup = document.querySelector('.popup__close_type_profile');

//находим элемент с именем профиля
export const nameProfileEdit = document.querySelector('.profile-info__name');

//находим элемент с информацией о профиле
export const profileAboutEdit = document.querySelector('.profile-info__about');

//находим инпут для ввода имени профиля
export const nameImput = document.querySelector('.popup__input_type_name');

//находим инпут для ввода информации о профиле
export const jobInput = document.querySelector('.popup__input_type_about');

//находим инпут для ввода названия новой карточки
export const nameImputCardPopap = popupCards.querySelector('.popup__input_type_name');

//находим инпут для ввода ссылки на изображение
export const linkImputCardPopap = popupCards.querySelector('.popup__input_type_about');

export const formEditProfile = document.querySelector('.popup__container_type_profile');

export const elements = document.querySelector('.elements');

export const formAddCards = popupCards.querySelector('.popup__container');

export const buttonClosePopupTypePicture = document.querySelector('.box__close');
//находим кнопку добавления карточки

export const cardsButtonOpen = document.querySelector('.profile__add-button');

export const cardsButtonClose = popupCards.querySelector('.popup__close');

export const selectors = ({
    formSelector: '.popup__section',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: '.popup__input-error',
    errorClass: 'popup__input-error_active',
    redLineInputError: 'popup__input_red-line'
  });