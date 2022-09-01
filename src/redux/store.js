import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, Alex', likesCount: '23'},
                {id: '2', message: 'How are you?', likesCount: '13'}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Alex'},
                {id: '2', name: 'Sveta'},
                {id: '3', name: 'Lena'},
                {id: '4', name: 'Egor'}
            ],
            messages: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'How are you?'},
                {id: '3', message: 'Im fine'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
        }
}

export default store

window.store = store