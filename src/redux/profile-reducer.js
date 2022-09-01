const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'


const profileReducer = (state, action) => {
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