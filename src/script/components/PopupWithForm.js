import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor ({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    _getElement () {
        const formElement = this._popupSelector
        .querySelector('.popup__container')
        return formElement; 
    }

    _getInputValues () {
        this._inputList = this._element.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        this.close();
  return this._formValues;
    }

    close () {
        super.close();
        this._element.reset();
    }

    _setEventListeners () {
            this._element.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            super.setEventListeners();
          });
    }

    generate() {
        this._element = this._getElement();
        this._setEventListeners();
       
        return this._element;
    }
}