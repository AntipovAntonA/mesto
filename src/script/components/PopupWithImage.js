import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor(popupElement) {
        super(popupElement);
        this._cardImage = this._popupElement.querySelector('.box__image');
        this._cardImageTitle = this._popupElement.querySelector('.box__signature');
    }
    open({ data }) {
        this._cardImage.src = data.link;
        this._cardImage.alt = data.name;
        this._cardImageTitle.textContent = data.name;
        super.open();
    }
}