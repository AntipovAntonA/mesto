//находим блок popup
const windowModal = document.querySelector('.popup');

const popupTypeProfile = document.querySelector('.popup_type_profile');

//находим кнопку редактирования профиля
const buttonOpenProfilePopup = document.querySelector('.profile-info__edit-button');

//находим крестик
const buttonClosePopup = document.querySelector('.popup__close_type_profile');

//находим элемент с именем профиля
const nameProfileEdit = document.querySelector('.profile-info__name');

//находим элемент с информацией о профиле
const profileAboutEdit = document.querySelector('.profile-info__about');

//находим инпут для ввода имени профиля
const nameImput = document.querySelector('.popup__input_type_name');

//находим инпут для ввода информации о профиле
const jobInput = document.querySelector('.popup__input_type_about');

const popupCards = document.querySelector('.popup_type_card-add');

//находим инпут для ввода названия новой карточки
const nameImputCardPopap = popupCards.querySelector('.popup__input_type_name');

//находим инпут для ввода ссылки на изображение
const linkImputCardPopap = popupCards.querySelector('.popup__input_type_about');

//Универсальная функция открытия попапа

function openWindowModal (windowModal) {
  windowModal.classList.add('popup_opened');
}

//Универсальная функция закрытия попапа
function closeWindowModal (windowModal) {
  windowModal.classList.remove('popup_opened');
}

//Закрытие попапа по клику вне области формы
const closePopupClickOverlay = (event) => {
  //console.log(event.target, event.currentTarget)
  if (event.target !== event.currentTarget) {
    return;
  }
  closeWindowModal(popupTypeProfile);
  closeWindowModal(popupTypePicture);
  closeWindowModal(popupCards);
}
//Закрытие попапов по клавише Esc
document.addEventListener('keydown', function(evt){
  if (evt.key === 'Escape'){
    closeWindowModal(popupTypeProfile);
    closeWindowModal(popupTypePicture);
    closeWindowModal(popupCards); 
  }
})

popupTypeProfile.addEventListener('click', closePopupClickOverlay)

//заполнение полей редактирования профиля, плюс вызов функции открытия попапа (добавление модификатора)
function openProfilePopup () {
    nameImput.value = nameProfileEdit.textContent;
    jobInput.value = profileAboutEdit.textContent;
    openWindowModal(popupTypeProfile);
}
//навешиваем событие клик на кнопку открытия попапа (редактирование профиля)
buttonOpenProfilePopup.addEventListener('click', openProfilePopup)

//функция закрытия попапа профиля
function closePopapTypeProfile () {
  closeWindowModal(popupTypeProfile);
}

buttonClosePopup.addEventListener('click', closePopapTypeProfile)

const formEditProfile = document.querySelector('.popup__container_type_profile');

function editProfile(evt){
    evt.preventDefault();
    nameProfileEdit.textContent = nameImput.value 
    profileAboutEdit.textContent = jobInput.value
    closeWindowModal(popupTypeProfile);
}

formEditProfile.addEventListener('submit', editProfile);


//ниже начинается функционал ПР5
 
    //находим содержимое тега template

const elementTemplate = document.querySelector('.elements_template');

    //находим элемент, куда будем добавлять карточку
const elements = document.querySelector('.elements');

//функция создания карточки
const createCard = (element) => {

  const elementCard = document.querySelector('.elements_template').content.cloneNode(true);

  elementCard.querySelector('.element__img').src = element.link;
  elementCard.querySelector('.heading__name').textContent = element.name;
  elementCard.querySelector('.element__img').alt = element.name;

  setEventListeners(elementCard);

 return elementCard;
};

const deleteHandler = (event) =>{
  const target = event.target;
  const cardElementCurrent = target.closest('.element');
  cardElementCurrent.remove();
}

const likeHandler = (event) =>{
  event.target.classList.toggle('heading__heart_activ');
}

const popupTypePicture = document.querySelector('.popup_type_picture');

const imageBigPopup = popupTypePicture.querySelector('.box__image');

const headingBigPopup = popupTypePicture.querySelector('.box__signature');

const imageCardHandler = (event) => {
  const target = event.target;
  const cardElementCurrent = target.closest('.element');
  const imageCardElementCurrent = cardElementCurrent.querySelector('.element__img');
  imageBigPopup.src = imageCardElementCurrent.src;
  headingBigPopup.textContent = imageCardElementCurrent.alt;
  openWindowModal(popupTypePicture);
};

popupTypePicture.addEventListener('click', closePopupClickOverlay)

const setEventListeners = (elementListener) =>{

  const buttonDeleteCard = elementListener.querySelector('.element__delete');

  buttonDeleteCard.addEventListener('click', deleteHandler);

  const buttonLikeCard = elementListener.querySelector('.heading__heart');

  buttonLikeCard.addEventListener('click', likeHandler);

  const buttonImageCard = elementListener.querySelector('.element__img');

  buttonImageCard.addEventListener('click', imageCardHandler);
}
//функция добавления карточки
const renderCard = (element) =>{
  
  const cardAddPage = createCard(element);
  
  elements.prepend(cardAddPage)
  
};

initialCards.forEach(renderCard)


const buttonClosePopupTypePicture = document.querySelector('.box__close');
const closePopupTypePicture = function(){
  closeWindowModal(popupTypePicture);
};
buttonClosePopupTypePicture.addEventListener('click', closePopupTypePicture);



//находим кнопку добавления карточки
const cardsButtonOpen = document.querySelector('.profile__add-button');

const cardsButtonClose = popupCards.querySelector('.popup__close');

const buttonSubmitPopupTypeCardAdd = popupCards.querySelector('.popup__button');

popupCards.addEventListener('click', closePopupClickOverlay)

//функция добавления модификатора
const openCardsPopup = function(){
    
  openWindowModal(popupCards);
  //nameImputCardPopap.value = nameImputCardPopap.textContent;
  //linkImputCardPopap.value = linkImputCardPopap.textContent;

}
cardsButtonOpen.addEventListener('click', openCardsPopup)

//функция удаления модификатора
const closeCardsPopap = function(){
  closeWindowModal(popupCards);

}
cardsButtonClose.addEventListener('click', closeCardsPopap)

const formAddCards = popupCards.querySelector('.popup__container');

formAddCards.addEventListener('submit', (event) =>{
  event.preventDefault();

const data = {
  name: nameImputCardPopap.value,
  link: linkImputCardPopap.value
};
  renderCard(data);
  closeCardsPopap();
});
