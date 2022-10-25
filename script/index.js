const popup = document.querySelector('.popup');
const openButton = document.querySelector('.profile-info__edit-button_open-popup');
const closeButton = document.querySelector('.popup__close');


const openPopup = function(){
    popup.classList.add('popup__opened');
}
openButton.addEventListener('click', openPopup)

const closePopup = function(){
    popup.classList.remove('popup__opened');
    formElement.reset();
}
closeButton.addEventListener('click', closePopup)

const formElement = document.querySelector('.popup__container');
const nameImput = document.querySelector('.popup__input-name');
const jobInput = document.querySelector('.popup__input-about');

function editProfile(evt){
    evt.preventDefault();
  const heading = document.querySelector ('.profile-info__name');
  heading.textContent = nameImput.value 
  const aboutInfo = document.querySelector ('.profile-info__about');
  aboutInfo.textContent = jobInput.value  

}
formElement.addEventListener('submit', editProfile);
formElement.addEventListener('submit', closePopup); 