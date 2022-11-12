//находим блок popup
const popup = document.querySelector('.popup_type_profile');

//находим кнопку редактирования профиля
const buttonOpenProfilePopup = document.querySelector('.profile-info__edit-button');

//находим крестик
const buttonClosePopup = document.querySelector('.popup__close_type_profile');

//находим элемент с именем профиля
const editProfileName = document.querySelector('.profile-info__name');

//находим элемент с информацией о профиле
const editProfileAbout = document.querySelector('.profile-info__about');

//находим инпут для ввода имени профиля
const nameImput = document.querySelector('.popup__input_type_name');

//находим инпут для ввода информации о профиле
const jobInput = document.querySelector('.popup__input_type_about');

//функция добавления модификатора
const openPopup = function(){
    popup.classList.add('popup_opened');
}

//заполнение полей редактирования профиля, плюс вызов функции открытия попапа (добавление модификатора)
function openProfilePopup () {
    nameImput.value = editProfileName.textContent;
    jobInput.value = editProfileAbout.textContent;
    openPopup();
}
//навешиваем событие клик на кнопку открытия попапа (редактирование профиля)
buttonOpenProfilePopup.addEventListener('click', openProfilePopup)

//функция удаления модификатора
const closePopup = function(){
    popup.classList.remove('popup_opened');
}
buttonClosePopup.addEventListener('click', closePopup)

const formEditProfile = document.querySelector('.popup__container_type_profile');

function editProfile(evt){
    evt.preventDefault();
    editProfileName.textContent = nameImput.value 
    editProfileAbout.textContent = jobInput.value
    closePopup()
}

formEditProfile.addEventListener('submit', editProfile);


//ниже начинается функционал ПР5
 
    //находим содержимое тега template

const elementTemplate = document.querySelector('.elements_template');

    //находим элемент, куда будем добавлять карточку
const elements = document.querySelector('.elements');

//функция создания карточки
const createCard = (element) => {

  const elementCard = document.querySelector('.elements_template').content.cloneNode(true).children[0];

  elementCard.querySelector('.element__img').src = element.link;
  elementCard.querySelector('.heading__name').textContent = element.name;
  elementCard.querySelector('.element__img').alt = element.name;

 return elementCard;
};

const deleteHandler = (event) =>{
  const target = event.target;
  const currentCardElement = target.closest('.element');
  currentCardElement.remove();
}

const likeHandler = (event) =>{
  event.target.classList.toggle('heading__heart_activ');
}

const popupTypePicture = document.querySelector('.popup_type_picture');

const imageBigPopup = popupTypePicture.querySelector('.box__image');

const headingBigPopup = popupTypePicture.querySelector('.box__signature');

const imageCardHandler = (event) => {
  const target = event.target;
  const currentCardElement = target.closest('.element');
  const currentImageCardElement = currentCardElement.querySelector('.element__img');
  imageBigPopup.src = currentImageCardElement.src;
  headingBigPopup.textContent = currentImageCardElement.alt;
  popupTypePicture.classList.add('popup_opened');
};

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
  setEventListeners(cardAddPage);
  elements.prepend(cardAddPage)
  
};

initialCards.forEach(renderCard)


const buttonClosePopupTypePicture = document.querySelector('.box__close');
const closePopupTypePicture = function(){
  popupTypePicture.classList.remove('popup_opened');
};
buttonClosePopupTypePicture.addEventListener('click', closePopupTypePicture);


const popupCards = document.querySelector('.popup_type_card-add');
//находим кнопку добавления карточки
const openCardsButton = document.querySelector('.profile__add-button');

const closeCardsButton = popupCards.querySelector('.popup__close');

const buttonSubmitPopupTypeCardAdd = popupCards.querySelector('.popup__button');

//функция добавления модификатора
const openCardsPopup = function(){
    
  popupCards.classList.add('popup_opened');
  //nameImputCardPopap.value = nameImputCardPopap.textContent;
  //linkImputCardPopap.value = linkImputCardPopap.textContent;

}
openCardsButton.addEventListener('click', openCardsPopup)

//функция удаления модификатора
const closeCardsPopap = function(){
  popupCards.classList.remove('popup_opened');

}
closeCardsButton.addEventListener('click', closeCardsPopap)

const formAddCards = popupCards.querySelector('.popup__container');

formAddCards.addEventListener('submit', (event) =>{
  event.preventDefault();

  //находим инпут для ввода имени профиля во втором попапе
const nameImputCardPopap = popupCards.querySelector('.popup__input_type_name').value;

//находим инпут для ввода информации о профиле во втором попапе
const linkImputCardPopap = popupCards.querySelector('.popup__input_type_about').value;
  //console.log(nameImputCardPopap, linkImputCardPopap)
const data = {
  name: nameImputCardPopap,
  link: linkImputCardPopap
};
  renderCard(data);
  closeCardsPopap();
});

