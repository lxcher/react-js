const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

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
        if (action.type === ADD_POST) {
            const newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.text
            this._callSubscriber(this._state)
        } else if (action.type === ADD_MESSAGE) {

            const newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscriber(this._state)
        }
        }
}

export const addNewPostTextActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', text: text})
export const addNewMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text: text})

export default store

window.store = store