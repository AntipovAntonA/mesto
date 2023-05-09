export default class FormValidate {
    constructor(selectors, formElement) {
        this._formSelector = selectors.formSelector;
        this._inputSelector = selectors.inputSelector;
        this._submitButtonSelector = selectors.submitButtonSelector;
        this._inactiveButtonClass = selectors.inactiveButtonClass;
        this._inputErrorClass = selectors.inputErrorClass;
        this._errorClass = selectors.errorClass;
        this._redLineInputError = selectors.redLineInputError;
        this._formElement = formElement;
    }
    _checkImputValidity(inputElementPopup) {
        this._isValid = inputElementPopup.validity.valid;
        this._popupSection = inputElementPopup.closest(this._formSelector);
        this._errorElement = this._popupSection.querySelector(this._inputErrorClass);
        this._inputElementForm = this._popupSection.querySelector(this._inputSelector)
        if (this._isValid) {
            this._hideInputError(this._errorElement)
            this._hideRedLineInputError(this._inputElementForm)
        } else {
            this._showInputError(this._errorElement, inputElementPopup.validationMessage)
            this._showRedLineInputError(this._inputElementForm)
        }
    };
    _showInputError(errorElement, errorMessage) {
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };
    _hideInputError(errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
    };
    _showRedLineInputError(inputElementForm) {
        inputElementForm.classList.add(this._redLineInputError);
    }
    _hideRedLineInputError = (inputElementForm) => {
        inputElementForm.classList.remove(this._redLineInputError);
    }
    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElementPopup) => {
            return !inputElementPopup.validity.valid
        })
    };
    disabledButtonPopup() {
        this._buttonSubmit.setAttribute('disabled', true);
        this._buttonSubmit.classList.add(this._inactiveButtonClass);
    }
    _toggleButtonState(inputList, buttonElement) {

        if (this._hasInvalidInput(inputList)) {
            this.disabledButtonPopup()
        } else {
            buttonElement.removeAttribute('disabled')
            buttonElement.classList.remove(this._inactiveButtonClass)
        }
    }
    enableValidation(selectors) {
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
        this._inputList.forEach(inputElementPopup => {
            inputElementPopup.addEventListener('input', () => {
                this._checkImputValidity(inputElementPopup)
                this._toggleButtonState(this._inputList, this._buttonSubmit, selectors)
            })
        })
    }
}