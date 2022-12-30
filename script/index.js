import {popupCards, popupTypeProfile, buttonOpenProfilePopup, buttonClosePopup, nameImputCardPopap, linkImputCardPopap,
  formEditProfile, elements, formAddCards, popupTypePicture, buttonClosePopupTypePicture, cardsButtonOpen, cardsButtonClose, selectors,
  editFormModalWindow, cardFormModalWindow, cardSelector, initialCards} from './constants.js'

import {closePopupClickOverlay, openProfilePopup, closePopapTypeProfile, editProfile, closePopupTypePicture,
  openCardsPopup, closeCardsPopap} from './utils.js'

//импорт карточек
import Card from './card.js';

//импорт класса валидвции
import FormValidate from './FormValidate.js';

const createCard = (data) => {
  const card = new Card(data, cardSelector);
  return card.generateCard();
}

const renderCard = (data) => {
  const card = createCard(data);
  elements.prepend(card);
};
  
initialCards.forEach(renderCard)

formAddCards.addEventListener('submit', (event) =>{
  event.preventDefault();
  const data = {
  name: nameImputCardPopap.value,
  link: linkImputCardPopap.value,
};
  renderCard(data);
  closeCardsPopap();
});

const editFormValidator = new FormValidate (selectors, editFormModalWindow);

const cardFormValidator = new FormValidate (selectors, cardFormModalWindow);

editFormValidator.enableValidation();

cardFormValidator.enableValidation();

popupTypeProfile.addEventListener('click', closePopupClickOverlay)

//навешиваем событие клик на кнопку открытия попапа (редактирование профиля)
buttonOpenProfilePopup.addEventListener('click', openProfilePopup)

buttonClosePopup.addEventListener('click', closePopapTypeProfile)

formEditProfile.addEventListener('submit', editProfile);

popupTypePicture.addEventListener('click', closePopupClickOverlay)

buttonClosePopupTypePicture.addEventListener('click', closePopupTypePicture);

popupCards.addEventListener('click', closePopupClickOverlay)

cardsButtonOpen.addEventListener('click', openCardsPopup)

cardsButtonClose.addEventListener('click', closeCardsPopap)