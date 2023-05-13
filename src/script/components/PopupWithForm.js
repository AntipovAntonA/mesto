import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor({ popupElement, handleFormSubmit }) {
        super(popupElement);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupElement.querySelector('.popup__container');
        this._inputList = this._popupElement.querySelectorAll('.popup__input');
        this._submitButton = this._popupElement.querySelector('.popup__button');
        this._submitButtonText = this._submitButton.textContent;
    }
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }
    close() {
        super.close();
        this._formElement.reset();
    }
    renderLoading(isLoading, loadingText='Сохранение...') {
        if(isLoading) {
            this._submitButton.textContent = loadingText;
        } else {
            this._submitButton.textContent = this._submitButtonText;
        }
    }
    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }
}