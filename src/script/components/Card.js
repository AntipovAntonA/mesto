export default class Card {
    constructor({ data, handleCardClick, handleLikeClick, handleDeleteCard }, cardSelector, userId) {
        this._data = data;
        this.cardId = data._id;
        this._likes = data.likes;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleDeleteCard = handleDeleteCard;
        this._cardSelector = document.querySelector(cardSelector);
        this._userId = userId;
        this._owner = data.owner._id;
    }
    _getElement() {
        const elementCard = this._cardSelector
            .content
            .cloneNode(true)
            .children[0];
        return elementCard;

    }
    generateCard() {
        this._element = this._getElement();
        this._cardImage = this._element.querySelector('.element__img');
        this._cardImageName = this._element.querySelector('.heading__name');
        this._cardImage.src = this._data.link;
        this._cardImageName.textContent = this._data.name;
        this._cardImage.alt = this._data.name;
        this._likeButton = this._element.querySelector('.heading__heart'); //кнопка лайка
        this._quantityLikesCardElement = this._element.querySelector('.heading__like-quantity'); //счетчик лайков
        this._quantityLikesCardElement.textContent = this._likes.length;
        this._deleteButton = this._element.querySelector('.element__delete');
        if (this._owner !== this._userId) {
            this._deleteButton.remove();
        }
        if (this.isLiked(true)) {
            this._likeButton.classList.add("heading__heart_activ");
        }
        this._setEventListeners();
        this._likeCard();
        return this._element;
    }
    _setEventListeners() {
        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteCard(this)
        });
        this._likeButton.addEventListener('click', () => {
            this._handleLikeClick(this)
        });

        this._cardImage.addEventListener('click', () => {
            this._handleCardClick();
        })
    }
    _likeCard() {
        this.isLiked
    }
    addLike() {
        this._likeButton.classList.add("heading__heart_activ");
    }
    removeLike() {
        this._likeButton.classList.remove("heading__heart_activ");
    }
    countLikes(data) {
        this._quantityLikesCardElement.textContent = data.likes.length;
        this._likes = data.likes;
    }
    isLiked() {
        return this._likes.some((item) => item._id === this._userId)

    }
    handleDeleteCard() {
        this._element.remove();

    }
}
