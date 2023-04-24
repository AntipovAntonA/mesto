import './pages/index.css';
import {popupCards, popupTypeProfile, buttonOpenProfilePopup,
  elements, popupTypePicture, cardsButtonOpen, selectors,
  editFormModalWindow, cardFormModalWindow, cardSelector, initialCards} from './script/utils/constants.js'
  import {disabledButtonPopup} from './script/components/FormValidate.js'

// import {openProfilePopup, closePopapTypeProfile, editProfile, closePopupTypePicture,
//   openCardsPopup, closeCardsPopap} from '../utils/utils.js'

import PopupWithImage from './script/components/PopupWithImage.js'

import PopupWithForm from './script/components/PopupWithForm.js'

//импорт карточек
import Card from './script/components/Card.js';

//импорт класса валидации
import FormValidate from './script/components/FormValidate.js';

import Section from './script/components/Section.js';

import UserInfo from './script/components/UserInfo.js';


function createCard (cardItem) {
  const card = new Card ({
    data: cardItem,
    handleCardClick: () => {
        const popupImage = new PopupWithImage ({
          data: cardItem
        }, popupTypePicture);
        popupImage.open();
      }
    },
    cardSelector);
      const cardElement = card.generateCard();
      cardList.setItem(cardElement);
}

const cardList = new Section ({
  data: initialCards,
  renderer: (cardItem) => {
    createCard (cardItem)
  },
},
elements
);

const popupProfile = new PopupWithForm ({
  popupSelector: popupTypeProfile,
  handleFormSubmit: (data) => {
      const userForm = new UserInfo (data);
      userForm.setUserInfo();
  }
})

popupProfile.generate();


  const popupForm = new PopupWithForm ({
    popupSelector: popupCards,
    handleFormSubmit: (data) => {
      createCard (data)
    }
  })

  const popupTypeCardElement = popupForm.generate();

  const popupTypeCardRenderer = new Section ({
    data: []
    }, '.popup_type_card-add');

  popupTypeCardRenderer.setItem(popupTypeCardElement); 

cardsButtonOpen.addEventListener('click', () => {
    popupForm.open()
    disabledButtonPopup();
})

buttonOpenProfilePopup.addEventListener('click', () => {
  popupProfile.open()
  const inputFormReplace = new UserInfo()
  inputFormReplace.getUserInfo()
})

cardList.renderItems();

const editFormValidator = new FormValidate (selectors, editFormModalWindow);

const cardFormValidator = new FormValidate (selectors, cardFormModalWindow);

editFormValidator.enableValidation();

cardFormValidator.enableValidation();
