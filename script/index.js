//находим блок popup
const popup = document.querySelector('.popup');

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