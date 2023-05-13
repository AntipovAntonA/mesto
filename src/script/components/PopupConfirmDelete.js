import Popup from "./Popup.js";
export default class PopupConfirmDelete extends Popup {
    constructor (popupElement) {
        super(popupElement);
    }
    setSubmitAction (action) {
        this._functionSubmit = action;
    }
    setEventListeners () {
            super.setEventListeners();
            this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault(); 
            this._functionSubmit();
          });
    }
}