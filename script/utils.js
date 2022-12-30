import {nameImput, nameProfileEdit, profileAboutEdit, jobInput, popupTypeProfile, popupTypePicture, popupCards, 
nameImputCardPopap, linkImputCardPopap, buttonSubmitPopup, buttonEsc} from './constants.js'
import {disabledButtonPopup} from './FormValidate.js'

//Закрытие попапов по клавише Esc
export function closePopupByClickEsc (event) {
    if (event.key === buttonEsc) {
      const popupOpenNow = document.querySelector('.popup_opened');
      closeWindowModal(popupOpenNow);
      return
    }
}

//Универсальная функция открытия попапа
export function openWindowModal (windowModal) {
    windowModal.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupByClickEsc)
  }

  //Универсальная функция закрытия попапа
export function closeWindowModal (windowModal) {
    windowModal.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupByClickEsc)
}
  
  //Закрытие попапа по клику вне области формы
  export const closePopupClickOverlay = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    closeWindowModal(event.target);
  }

  //заполнение полей редактирования профиля, плюс вызов функции открытия попапа (добавление модификатора)
export function openProfilePopup () {
  nameImput.value = nameProfileEdit.textContent;
  jobInput.value = profileAboutEdit.textContent;
  openWindowModal(popupTypeProfile);

}

//функция закрытия попапа профиля
export function closePopapTypeProfile () {
  closeWindowModal(popupTypeProfile);
}

export function editProfile(evt){
  evt.preventDefault();
  nameProfileEdit.textContent = nameImput.value 
  profileAboutEdit.textContent = jobInput.value
  closeWindowModal(popupTypeProfile);
}

export const closePopupTypePicture = function(){
  closeWindowModal(popupTypePicture);
};

export const openCardsPopup = function() {
    
  openWindowModal(popupCards);
  buttonSubmitPopup.value = nameImputCardPopap.textContent;
  buttonSubmitPopup.value = linkImputCardPopap.textContent;
  disabledButtonPopup();
}

//функция удаления модификатора
export const closeCardsPopap = function(){
  closeWindowModal(popupCards);
}