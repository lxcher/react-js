const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text
            return state
        case ADD_MESSAGE:
            const newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export const addNewMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const updateNewMessageTextActionCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', text: text})

export default dialogsReducer