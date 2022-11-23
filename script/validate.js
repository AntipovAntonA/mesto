const checkImputValidity = (inputElementPopup) => {
    const isValid = inputElementPopup.validity.valid;
    const popupSection = inputElementPopup.closest(selectors.formSelector);
    const errorElement = popupSection.querySelector(selectors.inputErrorClass);
    const inputElementForm = popupSection.querySelector(selectors.inputSelector)
    if (isValid) {
        hideInputError (errorElement)
        hideRedLineInputError(inputElementForm)
    } else {
        showInputError (errorElement, inputElementPopup.validationMessage)
        showRedLineInputError(inputElementForm)
    }
};

const showInputError = (errorElement, errorMessage) => {
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectors.errorClass);
};

const hideInputError = (errorElement) => {
    errorElement.textContent = '';
    errorElement.classList.remove(selectors.errorClass);
};

const showRedLineInputError = (inputElementForm) => {
    inputElementForm.classList.add(selectors.redLineInputError);
}
const hideRedLineInputError = (inputElementForm) => {
    inputElementForm.classList.remove(selectors.redLineInputError);
}



const toggleButtonState = (inputList, buttonElement, selectors) => {
    const hasInvalidInput = inputList.some(inputElementPopup => !inputElementPopup.validity.valid);

    if (hasInvalidInput) {
        buttonElement.setAttribute('disabled', true)
        buttonElement.classList.add(selectors.inactiveButtonClass)
    } else {
        buttonElement.removeAttribute('disabled')
        buttonElement.classList.remove(selectors.inactiveButtonClass)
    }
}




const setInputList = (formElement, selectors) => {
    const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
    const buttonSubmit = formElement.querySelector(selectors.submitButtonSelector);

    toggleButtonState(inputList, buttonSubmit, selectors)

    inputList.forEach(inputElementPopup => {
    inputElementPopup.addEventListener('input', () => {
        checkImputValidity(inputElementPopup)
        toggleButtonState(inputList, buttonSubmit, selectors)
    })
})
}



const enableValidation = (selectors) => {

const formList = document.querySelectorAll('.popup__container');
formList.forEach(formElement => {
    setInputList(formElement, selectors);
})
}


const selectors = ({
    formSelector: '.popup__section',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: '.popup__input-error',
    errorClass: 'popup__input-error_active',
    redLineInputError: 'popup__input_red-line'
  }); 

  enableValidation(selectors)
