import Popup from "./Popup.js";
export default class PopupConfirmDelete extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
    }
    setSubmitAction (action) {
        this._functionSubmit = action;
    }
    setEventListeners () {
            super.setEventListeners();
            this._popupSelector.addEventListener('submit', (evt) => {
            evt.preventDefault(); 
            this._functionSubmit();
            this.close();
          });
    }
}