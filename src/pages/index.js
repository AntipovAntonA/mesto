import './index.css';
import {
  buttonOpenProfilePopup, buttonUpdateAvatar, cardsButtonOpen, selectors, editFormModalWindow, cardFormModalWindow, 
  popupAvatarContainer, jobInput, nameImput, profileAvatarImage} from '../script/utils/constants.js'

import PopupWithImage from '../script/components/PopupWithImage.js'

import PopupWithForm from '../script/components/PopupWithForm.js'

//импорт карточек
import Card from '../script/components/Card.js';

//импорт класса валидации
import FormValidate from '../script/components/FormValidate.js';

import Section from '../script/components/Section.js';

import UserInfo from '../script/components/UserInfo.js';

import Api from '../script/components/Api.js';
import PopupConfirmDelete from '../script/components/PopupConfirmDelete';

let userId;

const popupImage = new PopupWithImage('.popup_type_picture');
popupImage.setEventListeners();

const userForm = new UserInfo({ name: '.profile-info__name', about: '.profile-info__about', avatar: '.profile__avatar' });

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-65/',
  headers: {
    authorization: 'd912ad35-1816-409b-8500-95a25953b07e',
    "Content-Type": 'application/json'
  }
})

Promise.all([api.getInfoUser(), api.getInitialCards()])
  .then(([data, cards]) => {
    userForm.setUserInfo({ data })
    userId = data._id;
    cardList.renderItems(cards)
    
  })
  .catch((err) => {
    console.error(err)
  })
const popupProfile = new PopupWithForm({
  popupElement: '.popup_type_profile',
  handleFormSubmit: (inputs) => {
    
    popupProfile.renderLoading(true);
    api.editUserInfo(inputs).then((data) => {
      userForm.setUserInfo({ data });
      
      popupProfile.close();
    })
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      popupProfile.renderLoading(false);
    })
  }
})
popupProfile.setEventListeners();
buttonOpenProfilePopup.addEventListener('click', () => {
  popupProfile.open()
  const {name, about} = userForm.getUserInfo();
  nameImput.value = name;
  jobInput.value = about;
})
function handleLikeClick(card) {
  if (card.isLiked()) {
    api.deleteLikeCard(card.cardId)
      .then((res) => {
        card.removeLike();
        card.countLikes(res);
      })
  } else {
    api.addLikeCard(card.cardId)
      .then((res) => {
        card.addLike();
        card.countLikes(res)

      })
      .catch((err) => {
        console.error(err)
    })
  }
}
//функция создания новой карточки
function createCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: () => {
      popupImage.open({ data: item });
    },
    handleLikeClick: handleLikeClick,
    handleDeleteCard: handleDeleteCard
  }, '.elements_template', userId);
  const cardElement = card.generateCard();
  return cardElement;
}
const cardList = new Section({
  renderer: (cardItem) => {
    cardList.setItem(createCard(cardItem));
  },
}, '.elements');
const popupForm = new PopupWithForm({
  popupElement: '.popup_type_card-add',
  handleFormSubmit: (data) => {
    popupForm.renderLoading(true);
    api.createNewCard(data).then((item) => {
      cardList.setItem(createCard(item));
      popupForm.close()
    })
    .catch((err) => {
      console.error(err)
  })
  .finally(() => {
    popupForm.renderLoading(false);
  })
  }
})

popupForm.setEventListeners();

cardsButtonOpen.addEventListener('click', () => {
  popupForm.open()
  cardFormValidator.disableButton();
 
})

const popupUpdateAvatar = new PopupWithForm({
  popupElement: '.popup_update-avatar',
  handleFormSubmit: (link) => {
    popupUpdateAvatar.renderLoading(true);
    api.updateUserAvatar(link).then((data) => {
      userForm.setUserInfo({ data });
      popupUpdateAvatar.close()
    })
    .catch((err) => {
      console.error(err)
  })
  .finally(() => {
    popupUpdateAvatar.renderLoading(false);
  })
  }
})
popupUpdateAvatar.setEventListeners();

buttonUpdateAvatar.addEventListener('click', () => {
  popupUpdateAvatar.open();
  avatarFormValidator.disableButton();
})

const popupConfirmDeleteCard = new PopupConfirmDelete('.popup_confirm');
popupConfirmDeleteCard.setEventListeners();

function handleDeleteCard(card) {
  function submitPopupConfirm() {
    api.deleteCardElement(card.cardId)
      .then(() => {
        card.handleDeleteCard();
        popupConfirmDeleteCard.close();
      })
      .catch((err) => {
        console.error(err)
    })
  }
  popupConfirmDeleteCard.setSubmitAction(submitPopupConfirm);
  popupConfirmDeleteCard.open();
}

const editFormValidator = new FormValidate(selectors, editFormModalWindow);

const cardFormValidator = new FormValidate(selectors, cardFormModalWindow);

const avatarFormValidator = new FormValidate(selectors, popupAvatarContainer);

editFormValidator.enableValidation();

cardFormValidator.enableValidation();

avatarFormValidator.enableValidation();
