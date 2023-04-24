import {nameProfileEdit, profileAboutEdit, jobInput, nameImput} from '../utils/constants.js'
export default class UserInfo {
    constructor (data) {
        this._data = data;
    }
    getUserInfo () {
        nameImput.value = nameProfileEdit.textContent;
        jobInput.value = profileAboutEdit.textContent;
    }
    setUserInfo () {
        nameProfileEdit.textContent = this._data.name;
        profileAboutEdit.textContent = this._data.about;
    }
}