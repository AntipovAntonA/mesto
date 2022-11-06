//находим блок popup
const popup = document.querySelector('#first');

//находим кнопку редактирования профиля
const openButton = document.querySelector('.profile-info__edit-button');

//находим крестик
const closeButton = document.querySelector('.popup__close');

//находим элемент с именем профиля
const editProfileName = document.querySelector('.profile-info__name');

//находим элемент с информацией о профиле
const editProfileAbout = document.querySelector('.profile-info__about');

//находим инпут для ввода имени профиля
const nameImput = document.querySelector('.popup__input-name');

//находим инпут для ввода информации о профиле
const jobInput = document.querySelector('.popup__input-about');

//функция добавления модификатора
const openPopup = function(){
    
    popup.classList.add('popup_opened');
    nameImput.value = editProfileName.textContent
    jobInput.value = editProfileAbout.textContent
}
openButton.addEventListener('click', openPopup)

//функция удаления модификатора
const closePopup = function(){
    popup.classList.remove('popup_opened');
}
closeButton.addEventListener('click', closePopup)

const formElement = document.querySelector('.popup__container');

function editProfile(evt){
    evt.preventDefault();
    editProfileName.textContent = nameImput.value 
    editProfileAbout.textContent = jobInput.value
    closePopup()
}

formElement.addEventListener('submit', editProfile);

//ниже начинается функционал ПР5

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
 
    //находим содержимое тега template
const elementTemplate = document.querySelector('.elements_template');
    //находим элемент, куда будем добавлять карточку
const elements = document.querySelector('.elements');



function addCards (element) {

  const cardElement = elementTemplate.content.cloneNode(true).children[0];

  cardElement.querySelector('.element__img').src = element.link;
  cardElement.querySelector('.heading__name').textContent = element.name;
  cardElement.querySelector('.element__img').alt = element.name;

  const likeActiv = cardElement.querySelector('.heading__heart');
  likeActiv.addEventListener('click', function(event){
    //console.log('лайк')
    event.target.classList.toggle('heading__heart_activ');
  });

  const deleteButton = cardElement.querySelector('.element__delete');
//console.log(deleteButton)
  deleteButton.addEventListener('click', function(){
  //console.log('Удалить')
  const cardDelete = deleteButton.closest('.element');
  cardDelete.remove();
});

const openThirdPopapButton = cardElement.querySelector('.element__img');
const image = document.querySelector('.box__image');
const heading = document.querySelector('.box__signature');

const openThirdPopap = document.querySelector('#third');
const openImage = function(){
  //console.log('testtest')
  openThirdPopap.classList.add('popup_opened');
  image.src = openThirdPopapButton.src;
  heading.textContent = openThirdPopapButton.alt;
}; 

openThirdPopapButton.addEventListener('click', openImage);

const closeThirdPopupButton = document.querySelector('.box__close');
const closeThirdPopup = function(){
  openThirdPopap.classList.remove('popup_opened');  
};
closeThirdPopupButton.addEventListener('click', closeThirdPopup);

  elements.append(cardElement)
};

initialCards.forEach(addCards)

const popupCards = document.querySelector('#second');
//находим кнопку добавления карточки
const openCardsButton = document.querySelector('.profile__add-button');

const closeCardsButton = popupCards.querySelector('.popup__close');

//находим инпут для ввода имени профиля во втором попапе
const nameImputCardPopap = popupCards.querySelector('.popup__input-name');

//находим инпут для ввода информации о профиле во втором попапе
const linkImputCardPopap = popupCards.querySelector('.popup__input-about');

//функция добавления модификатора
const openCardsPopup = function(){
    
  popupCards.classList.add('popup_opened');
  nameImputCardPopap.value = nameImputCardPopap.textContent;
  linkImputCardPopap.value = linkImputCardPopap.textContent;

}
openCardsButton.addEventListener('click', openCardsPopup)

//функция удаления модификатора
const closeCardsPopap = function(){
  popupCards.classList.remove('popup_opened');

}
closeCardsButton.addEventListener('click', closeCardsPopap)



const addCardsForm = popupCards.querySelector('.popup__container');


function addCardForm(text, link){
  
  const cloneTemplate = elementTemplate.content.cloneNode(true);

  cloneTemplate.querySelector('.element__img').src = link;
  cloneTemplate.querySelector('.heading__name').textContent = text;
  cloneTemplate.querySelector('.element__img').alt = text;

  const likeActiv = cloneTemplate.querySelector('.heading__heart');
  likeActiv.addEventListener('click', function(event){
    event.target.classList.toggle('heading__heart_activ');
  });

  const deleteButton = cloneTemplate.querySelector('.element__delete');
  //console.log(deleteButton)
  deleteButton.addEventListener('click', function(){
  //console.log('Удалить')
  const cardDelete = deleteButton.closest('.element');
  cardDelete.remove();

});

const openThirdPopapButton = cloneTemplate.querySelector('.element__img');
const image = document.querySelector('.box__image');
const heading = document.querySelector('.box__signature');
const openThirdPopap = document.querySelector('#third');
const openImage = function(){
  //console.log('testtest')
  openThirdPopap.classList.add('popup_opened');
  image.src = openThirdPopapButton.src;
  heading.textContent = openThirdPopapButton.alt;
}; 

openThirdPopapButton.addEventListener('click', openImage);

const closeThirdPopupButton = document.querySelector('.box__close');
const closeThirdPopup = function(){
  openThirdPopap.classList.remove('popup_opened');
};
closeThirdPopupButton.addEventListener('click', closeThirdPopup);

  elements.prepend(cloneTemplate)

};

addCardsForm.addEventListener('submit', function(event){
  event.preventDefault();

const text = popupCards.querySelector('.popup__input-name').value;
const link = popupCards.querySelector('.popup__input-about').value;

addCardForm(text, link);
closeCardsPopap()

});

const openThirdPopapButton = document.querySelector('.element__img');

const openThirdPopap = document.querySelector('#third');
const openImage = function(){
  //console.log('testtest')
  openThirdPopap.classList.add('popup_opened');
}; 

openThirdPopapButton.addEventListener('click', openImage);

const closeThirdPopupButton = document.querySelector('.box__close');
const closeThirdPopup = function(){
  openThirdPopap.classList.remove('popup_opened');
};
closeThirdPopupButton.addEventListener('click', closeThirdPopup);

