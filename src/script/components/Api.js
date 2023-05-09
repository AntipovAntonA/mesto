export default class Api {
    constructor(url, saveUser, saveCard, saveAvatar) {
        this._url = url;
        this._saveUser = saveUser;
        this._saveCard = saveCard;
        this._saveAvatar = saveAvatar;
    }
    getInfoUser() {
        return fetch(this._url + `users/me`, {
            headers: {
                authorization: 'd912ad35-1816-409b-8500-95a25953b07e'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Что то пошло не по плану: ${res.status}`);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    editUserInfo(data) {
        this._saveUser(true)
        return fetch(this._url + `users/me`, {
            method: "PATCH",
            body: JSON.stringify({
                name: data.name,
                about: data.about
            }),
            headers: {
                authorization: 'd912ad35-1816-409b-8500-95a25953b07e',
                "Content-Type": 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка при редактировании профиля: ${res.status}`);
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                this._saveUser(false)
            })
    }
    getInitialCards() {
        return fetch(this._url + `cards`, {
            headers: {
                authorization: 'd912ad35-1816-409b-8500-95a25953b07e'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }

                return Promise.reject(`Что то пошло не по плану: ${res.status}`);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    createNewCard(data) {
        this._saveCard(true)
        return fetch(this._url + `cards`, {
            method: 'POST',
            body: JSON.stringify({
                name: data.name,
                link: data.link
            }),
            headers: {
                authorization: 'd912ad35-1816-409b-8500-95a25953b07e',
                "Content-type": 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка при добавлении новой карточки: ${res.status}`);
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                this._saveCard(false)
            })
    }
    updateUserAvatar(data) {
        this._saveAvatar(true)
        return fetch(this._url + `users/me/avatar`, {
            method: "PATCH",
            body: JSON.stringify({
                avatar: data.link
            }),
            headers: {
                authorization: 'd912ad35-1816-409b-8500-95a25953b07e',
                "Content-Type": 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка при редактировании аватара: ${res.status}`);
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                this._saveAvatar(false)
            })
    }
    addLikeCard(cardId) {
        return fetch(this._url + `cards/${cardId}/likes`, {
            method: "PUT",
            headers: {
                authorization: 'd912ad35-1816-409b-8500-95a25953b07e',
                "Content-Type": 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка лайка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    deleteLikeCard(cardId) {
        return fetch(this._url + `cards/${cardId}/likes`, {
            method: "DELETE",
            headers: {
                authorization: 'd912ad35-1816-409b-8500-95a25953b07e',
                "Content-Type": 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка дизлайка: ${res.status}`);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    deleteCardElement(cardId) {
        return fetch(this._url + `cards/${cardId}`, {
            method: "DELETE",
            headers: {
                authorization: 'd912ad35-1816-409b-8500-95a25953b07e',
                "Content-Type": 'application/json'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
                return Promise.reject(`Ошибка удаления карточки: ${res.status}`);
            })
            .catch((err) => {
                console.log(err)
            })
    }
}