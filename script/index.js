import {popupCards, popupTypeProfile, buttonOpenProfilePopup, buttonClosePopup, nameImputCardPopap, linkImputCardPopap,
  formEditProfile, elements, formAddCards, popupTypePicture, buttonClosePopupTypePicture, cardsButtonOpen, cardsButtonClose, selectors,
  editFormModalWindow, cardFormModalWindow} from './const.js'

import {closePopupClickOverlay, openProfilePopup, closePopapTypeProfile, editProfile, closePopupTypePicture,
  openCardsPopup, closeCardsPopap} from './utils.js'

  //импорт массива
import {initialCards} from './cards.js';

//импорт карточек
import Card from './card.js';

import FormValidate from './FormValidate.js';

const editFormValidator = new FormValidate (selectors, editFormModalWindow);

const cardFormValidator = new FormValidate (selectors, cardFormModalWindow);

editFormValidator.enableValidation();

cardFormValidator.enableValidation();

popupTypeProfile.addEventListener('click', closePopupClickOverlay)

//навешиваем событие клик на кнопку открытия попапа (редактирование профиля)
buttonOpenProfilePopup.addEventListener('click', openProfilePopup)

buttonClosePopup.addEventListener('click', closePopapTypeProfile)

formEditProfile.addEventListener('submit', editProfile);

const renderCard = (item) =>{ 

  const card = new Card(item.name, item.link);

  const cardElement = card.generateCard();
  elements.prepend(cardElement);
};

initialCards.forEach(renderCard)


formAddCards.addEventListener('submit', (event) =>{

  event.preventDefault();

  const data = {

  name: nameImputCardPopap.value,

  link: linkImputCardPopap.value

};

  renderCard(data);

  closeCardsPopap();

});

popupTypePicture.addEventListener('click', closePopupClickOverlay)

buttonClosePopupTypePicture.addEventListener('click', closePopupTypePicture);

popupCards.addEventListener('click', closePopupClickOverlay)

cardsButtonOpen.addEventListener('click', openCardsPopup)

cardsButtonClose.addEventListener('click', closeCardsPopap)
