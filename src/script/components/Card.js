export default class Card {
    constructor ({data, handleCardClick}, cardSelector) {
            this._data = data;
            this._handleCardClick = handleCardClick;
            this._cardSelector = cardSelector;
        }
        _getElement () {
            const elementCard = this._cardSelector
            .content
            .cloneNode(true)
            .children[0];
            return elementCard;
           
        }
        generateCard () {
            this._element = this._getElement();
            this._cardImage = this._element.querySelector('.element__img');
            this._cardImageName = this._element.querySelector('.heading__name');
            this._cardImage.src = this._data.link;
            this._cardImageName.textContent = this._data.name;
            this._cardImage.alt = this._data.name;
            this._setEventListeners ();
            return this._element;
        }
        _setEventListeners () {
            this._likeButton = this._element.querySelector('.heading__heart');
            this._deleteButton = this._element.querySelector('.element__delete');
            this._likeButton.addEventListener('click', () => {
                this._handlerLikeCard()
            });
            this._deleteButton.addEventListener('click', () => {
                this._handlerDeleteCard()
            });
            this._cardImage.addEventListener('click', () => {
                 this._handleCardClick();
            })
        }

        _handlerLikeCard () {
            this._likeButton.classList.toggle('heading__heart_activ');
        }
        _handlerDeleteCard () {
            this._element.remove();
        }
    }
