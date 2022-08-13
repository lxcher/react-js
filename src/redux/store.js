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
            ]
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
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: this._state.profilePage.posts.length,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.text
            this._callSubscriber(this._state)
        }
        }
}

export default store

window.store = store