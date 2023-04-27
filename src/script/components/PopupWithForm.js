import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor ({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formElement = this._popupSelector.querySelector('.popup__container');
        this._inputList = this._popupSelector.querySelectorAll('.popup__input');
    }

    _getInputValues () {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        this.close();
  return this._formValues;
    }

    close () {
        super.close();
       this._formElement.reset();
    }

    setEventListeners () {
            super.setEventListeners();
            this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault();
            
            this._handleFormSubmit(this._getInputValues());
            
            
          });
    }
}