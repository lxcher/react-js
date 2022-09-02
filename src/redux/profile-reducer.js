const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
    posts: [
        {id: '1', message: 'Hi, Alex', likesCount: '23'},
        {id: '2', message: 'How are you?', likesCount: '13'}
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }
            state.newPostText = ''
            state.posts.push(newPost)
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state;
        default:
            return state
    }
}

export const addNewPostTextActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', text: text})

export default profileReducer