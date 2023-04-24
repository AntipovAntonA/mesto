export default class Popup {
    constructor (popupSelector) {
        this._popupSelector = popupSelector;
    }

    open () {
       //console.log('Попап открыт')
        this._popupSelector.classList.add('popup_opened');
        this.setEventListeners();
    }

    close () {
        this._popupSelector.classList.remove('popup_opened');
    }

    _handleEscClose (event) {     
            if (event.key === 'Escape') {
                this.close();
        }   
    }

    setEventListeners () {
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt)
        });

        const buttonCloose = this._popupSelector.querySelector('.popup__close');
            buttonCloose.addEventListener('click', () => {
                this.close();
            });
        this._popupSelector.addEventListener('click', (evt) => {
            if (evt.target === evt.currentTarget) {
                this.close();
            }
        }) 
        
    }
}