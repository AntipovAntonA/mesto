import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._cardImage = this._popupSelector.querySelector('.box__image');
        this._cardImageTitle = this._popupSelector.querySelector('.box__signature');
    }
    open({data}) {
        this._cardImage.src = data.link;
        this._cardImage.alt = data.name;
        this._cardImageTitle.textContent = data.name;
        super.open();
    }
    close(){
        super.close()
    }
}