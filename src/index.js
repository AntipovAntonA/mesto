import './pages/index.css';
import {popupCards, popupTypeProfile, buttonOpenProfilePopup,
  elements, popupTypePicture, cardsButtonOpen, selectors,
  editFormModalWindow, cardFormModalWindow, cardSelector, initialCards, jobInput, nameImput} from './script/utils/constants.js'

import PopupWithImage from './script/components/PopupWithImage.js'

import PopupWithForm from './script/components/PopupWithForm.js'

//импорт карточек
import Card from './script/components/Card.js';

//импорт класса валидации
import FormValidate from './script/components/FormValidate.js';

import Section from './script/components/Section.js';

import UserInfo from './script/components/UserInfo.js';

const popupImage = new PopupWithImage (popupTypePicture);
popupImage.setEventListeners();

const userForm = new UserInfo ({nameSelector: '.profile-info__name', aboutSelector: '.profile-info__about'});

//функция создания новой карточки
function createCard (item) {
  const card = new Card ({
    data: item,
    handleCardClick: () => {
        popupImage.open({data: item});
      }
    }, cardSelector);
      const cardElement = card.generateCard();
      return cardElement;
}

//передаю массив карточек и отрисовываю их на странице
const cardList = new Section ({
  data: initialCards,
  renderer: (cardItem) => {
    cardList.setItem(createCard(cardItem));
  },
}, elements);

const popupProfile = new PopupWithForm ({
  popupSelector: popupTypeProfile,
  handleFormSubmit: (data) => {
      userForm.setUserInfo(data);
  }
})
popupProfile.setEventListeners();

  const popupForm = new PopupWithForm ({
    popupSelector: popupCards,
    handleFormSubmit: (data) => {
      cardList.setItem(createCard(data));
    }
  })
  popupForm.setEventListeners();

  cardsButtonOpen.addEventListener('click', () => {
    popupForm.open()
    cardFormValidator.disabledButtonPopup();
})

buttonOpenProfilePopup.addEventListener('click', () => {
  popupProfile.open()
  const {name, about} = userForm.getUserInfo();
  nameImput.value = name;
  jobInput.value = about;
})

const editFormValidator = new FormValidate (selectors, editFormModalWindow);

const cardFormValidator = new FormValidate (selectors, cardFormModalWindow);

editFormValidator.enableValidation();

cardFormValidator.enableValidation();
cardList.renderItems();