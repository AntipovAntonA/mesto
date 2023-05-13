export default class Popup {
    constructor(popupElement) {
        this._popupElement = document.querySelector(popupElement);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(event) {
        if (event.key === 'Escape') {
            this.close();
        }
    }
    setEventListeners() {
        const buttonCloose = this._popupElement.querySelector('.popup__close');
        buttonCloose.addEventListener('click', () => {
            this.close();
        });
        this._popupElement.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        })
    }
}