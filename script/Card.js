import {popupTypePicture} from './constants.js'
import {closePopupByClickEsc} from './utils.js'

export default class Card {
    constructor (data, cardSelector) {
            this._data = data;
            this._cardSelector = cardSelector;
    }
        _getElement () {
            const elementCard = this._cardSelector.content.cloneNode(true).children[0];
            return elementCard;
           
        }
        generateCard () {
            this._element = this._getElement();
            this._setEventListeners ();
            this._element.querySelector('.element__img').src = this._data.link;
            this._element.querySelector('.heading__name').textContent = this._data.name;
            this._element.querySelector('.element__img').alt = this._data.name;
            return this._element;
        }
        _setEventListeners () {
            this._element.querySelector('.heading__heart').addEventListener('click', () => {
                this._handlerLikeCard()
            });
            this._element.querySelector('.element__delete').addEventListener('click', () => {
                this._handlerDeleteCard()
            });
            this._element.querySelector('.element__img').addEventListener('click', () => {
                this._largerSizeCard()
            });
        }

        _handlerLikeCard () {
            this._element.querySelector('.heading__heart').classList.toggle('heading__heart_activ');
        }
        _handlerDeleteCard () {
            this._element.remove();
        }
        _largerSizeCard () {
            popupTypePicture.classList.add('popup_opened');
            popupTypePicture.querySelector('.box__image').src = this._element.querySelector('.element__img').src;
            popupTypePicture.querySelector('.box__signature').textContent = this._element.querySelector('.element__img').alt;
            document.addEventListener('keydown', closePopupByClickEsc)
        }

    }
