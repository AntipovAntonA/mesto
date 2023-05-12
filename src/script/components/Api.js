export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    _checkResponse(res) {
   
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(`Что то пошло не по плану: ${res.status}`);
        }
    getInfoUser() {
        return fetch(this._baseUrl + `users/me`, {
            headers: this._headers
        })
            .then(this._checkResponse)
    }
    editUserInfo(data) {
        return fetch (this._baseUrl + `users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            }), 
        })
        .then(this._checkResponse)
    }
    getInitialCards() {
        return fetch(this._baseUrl + `cards`, {
            headers: this._headers
            })
            .then(this._checkResponse)
    }
    createNewCard(data) {
        return fetch(this._baseUrl + `cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            }),  
        })
        .then(this._checkResponse)
    }
    updateUserAvatar(data) {
        return fetch(this._baseUrl + `users/me/avatar`, {
            method: "PATCH",
            body: JSON.stringify({
                avatar: data.link
            }),
            headers: this._headers
        })
        .then(this._checkResponse)
    }
    addLikeCard(cardId) {
        return fetch(this._baseUrl + `cards/${cardId}/likes`, {
            method: "PUT",
            headers: this._headers
        })
        .then(this._checkResponse)
    }
    deleteLikeCard(cardId) {
        return fetch(this._baseUrl + `cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this._headers
        })
        .then(this._checkResponse)
    }
    deleteCardElement(cardId) {
        return fetch(this._baseUrl + `cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers
        })
        .then(this._checkResponse)
    }
}