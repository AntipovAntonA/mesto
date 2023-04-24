import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor ({data}, popupSelector) {
        super(popupSelector);
        this._data = data;
    }
    open() {
        this._popupSelector.querySelector('.box__image').src = this._data.link;
        this._popupSelector.querySelector('.box__image').alt = this._data.name;
        this._popupSelector.querySelector('.box__signature').textContent = this._data.name;
        super.open();
    }
    close(){
        super.close()
    }
}