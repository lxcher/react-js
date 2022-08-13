let rerenderEntireTree = () => {}

const state = {
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
}

export const addNewPost = () => {
    const newPost = {
        id: state.profilePage.posts.length,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (text) => {
    state.profilePage.newPostText = text
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state

window.state = state