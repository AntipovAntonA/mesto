import './pages/index.css';
import {
  popupCards, popupTypeProfile, popupAvatar, buttonOpenProfilePopup, buttonUpdateAvatar, buttonSubmitPopupTypeProfile, buttonSubmitEditAvatar,
  elements, popupTypePicture, cardsButtonOpen, selectors, popupConfirmCardDelete, buttonSubmitPopupTypeCardAdd,
  editFormModalWindow, cardFormModalWindow, popupAvatarContainer, cardSelector, jobInput, nameImput, nameProfileEdit, profileAboutEdit, profileAvatarImage
} from './script/utils/constants.js'

import PopupWithImage from './script/components/PopupWithImage.js'

import PopupWithForm from './script/components/PopupWithForm.js'

//импорт карточек
import Card from './script/components/Card.js';

//импорт класса валидации
import FormValidate from './script/components/FormValidate.js';

import Section from './script/components/Section.js';

import UserInfo from './script/components/UserInfo.js';

import Api from './script/components/Api.js';
import PopupConfirmDelete from './script/components/PopupConfirmDelete';

const popupImage = new PopupWithImage(popupTypePicture);
popupImage.setEventListeners();

const userForm = new UserInfo({ nameSelector: '.profile-info__name', aboutSelector: '.profile-info__about' });

const api = new Api('https://nomoreparties.co/v1/cohort-65/', saveUser, saveCard, saveAvatar)

function displayUserData() {
  api.getInfoUser().then((data) => {
    nameProfileEdit.textContent = data.name,
      profileAboutEdit.textContent = data.about
    profileAvatarImage.src = data.avatar
  })
}
displayUserData()

const popupProfile = new PopupWithForm({
  popupSelector: popupTypeProfile,
  handleFormSubmit: (data) => {
    const replaceUserData = api.editUserInfo(data).then(() => {
      userForm.setUserInfo(replaceUserData);
      displayUserData()
    })
  }
})

popupProfile.setEventListeners();

buttonOpenProfilePopup.addEventListener('click', () => {
  popupProfile.open()

  const { name, about } = userForm.getUserInfo();
  nameImput.value = name;
  jobInput.value = about;
})
function handleLikeClick(card) {
  if (card.isLiked()) {
    api.deleteLikeCard(card.cardId)
      .then((res) => {
        card.removeLike();
        card.quantityLikes(res)
      })
  } else {
    api.addLikeCard(card.cardId)
      .then((res) => {
        card.addLike();
        card.quantityLikes(res)
      })
  }

}
const userId = '6d213d054de62ed3b6516bde';
//функция создания новой карточки
function createCard(item) {
  const card = new Card({
    data: item,
    handleCardClick: () => {
      popupImage.open({ data: item });
    },
    handleLikeClick: handleLikeClick,
    handlerDeleteCard: handlerDeleteCard
  }, cardSelector, userId);
  const cardElement = card.generateCard();
  return cardElement;
}
const cardList = new Section({
  renderer: (cardItem) => {
    cardList.setItem(createCard(cardItem));
  },
}, elements);

api.getInitialCards().then((data) => {
  cardList.renderItems(data)
})

const popupForm = new PopupWithForm({
  popupSelector: popupCards,
  handleFormSubmit: (data) => {
    api.createNewCard(data).then((item) => {
      cardList.setItem(createCard(item))
    })
  }
})

popupForm.setEventListeners();

cardsButtonOpen.addEventListener('click', () => {
  popupForm.open()
  cardFormValidator.disabledButtonPopup();
})

const popupUpdateAvatar = new PopupWithForm({
  popupSelector: popupAvatar,
  handleFormSubmit: (link) => {
    api.updateUserAvatar(link).then((data) => {
      profileAvatarImage.src = data;
      displayUserData()
    })
  }
})
popupUpdateAvatar.setEventListeners();

buttonUpdateAvatar.addEventListener('click', () => {
  popupUpdateAvatar.open();
  avatarFormValidator.disabledButtonPopup();
})

const popupConfirmDeleteCard = new PopupConfirmDelete(popupConfirmCardDelete);
popupConfirmDeleteCard.setEventListeners();

function handlerDeleteCard(card) {
  function submitPopupConfirm() {
    api.deleteCardElement(card.cardId)
      .then(() => {
        card.handlerDeleteCard();
      })
  }
  popupConfirmDeleteCard.setSubmitAction(submitPopupConfirm);
  popupConfirmDeleteCard.open();
}

function saveUser(isLoading) {
  if (isLoading) {
    buttonSubmitPopupTypeProfile.textContent = 'Сохранение...'
  } else {
    buttonSubmitPopupTypeProfile.textContent = 'Сохранить'
  }
}
function saveCard(isLoading) {
  if (isLoading) {
    buttonSubmitPopupTypeCardAdd.textContent = 'Сохранение...'
  } else {
    buttonSubmitPopupTypeCardAdd.textContent = 'Создать'
  }
}
function saveAvatar(isLoading) {
  if (isLoading) {
    buttonSubmitEditAvatar.textContent = 'Сохранение...'
  } else {
    buttonSubmitEditAvatar.textContent = 'Сохранить'
  }
}

const editFormValidator = new FormValidate(selectors, editFormModalWindow);

const cardFormValidator = new FormValidate(selectors, cardFormModalWindow);

const avatarFormValidator = new FormValidate(selectors, popupAvatarContainer);

editFormValidator.enableValidation();

cardFormValidator.enableValidation();

avatarFormValidator.enableValidation();
